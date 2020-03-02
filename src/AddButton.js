import React from 'react';
import {Button, Icon, Modal, Dropdown} from "semantic-ui-react";
import Control from "react-leaflet-control";
import axios from 'axios';
import turfCentroid from "@turf/centroid";
import * as turf from "@turf/helpers";


    const facilities = [{
        key: 'GP',
        text: 'GP',
        value: 'GP',
        style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"}
    },
        {
            key: 'Primary School',
            text: 'Primary School',
            value: 'PrimarySchool',
            style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"}
        },
        {
            key: 'Secondary School',
            text: 'Secondary School',
            value: 'SecondarySchool',
            style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"}
        },
        {
            key: 'Post Office',
            text: 'Post Office',
            value: 'PostOffice',
            style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"}
        },
        {
            key: 'Shopping Facility',
            text: 'Shopping Facility',
            value: 'ShoppingFacilities',
            style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"}
        },
    ];
    const datazones = [];


    let current;
    let expression;
    let datazoneCoordinates = {};
let promises = [];
let times = {};


export default class AddButton extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            modalOpen : false,
            addFacility: "",
            addDataZone: "",

        };
    }
    handleOpen = () => this.setState({ modalOpen: true });

    handleFacilityChange = (event, data) => {
        this.setState({addFacility: data.value});
    };

    handleDataZoneChange = (event, data) => {
      this.setState({addDataZone: data.value});
    };

    handleClose = async (geo) => {
        this.setState({modalOpen : false});
        let datacode = parseInt(this.state.addDataZone.substr(1));
        let coords = [];
        coords.push(datazoneCoordinates[datacode]);
        let sourcepolygon = turf.polygon(coords);
        let sourcecentroid = turfCentroid(sourcepolygon);

        let neighbours = this.getNeighbours();

        let points = this.getCoordinates(neighbours);


        this.calculateTravelTimes(sourcecentroid,points,geo);

        // await this.checkChanges(times,geo);

        //console.log(geo);
       //

    };

    getNeighbours = () => {
        let pairs;
        let neighbouringDatazones = new Set();
        let selectedCode = parseInt(this.state.addDataZone.substr(1));
        pairs = datazoneCoordinates[selectedCode];

        //looping through other data zone to check if points match with selected data zone
        let range = 100;
        let minus1 = -1;
        let minusrange = range * minus1;
        let padding = "S0";
        //loop through data zones within a code range of given amount
        for (var n = minusrange; n < range; n++) {
            let currentkey = selectedCode + n;
            //check selected datazone coordinates against other data zone coordinates
            if(currentkey in datazoneCoordinates && (padding+currentkey != this.state.addDataZone)){
            for (var j = 0; j < pairs.length; j++) {
                    if ((JSON.stringify(datazoneCoordinates[currentkey]).includes(JSON.stringify(pairs[j])))) {
                        neighbouringDatazones.add("S0"+currentkey);
                    }
            }
            }
        }

        return Array.from(neighbouringDatazones);
    };
    getCoordinates = (neighbours) => {

        let currentCode;
        let coordinates = [];
        let polygon;
        let centroid;
        let pairs= {};
        for(var a = 0; a < neighbours.length; a++) {
            currentCode =neighbours[a];
            let current = parseInt(currentCode.substr(1));
            coordinates.push(datazoneCoordinates[current]);
            polygon = turf.polygon(coordinates);
            centroid = turfCentroid(polygon);
            pairs[currentCode] = centroid;
        }

        return pairs;
    };

    calculateTravelTimes = async (sourcepoint, destpoints,geo) => {


        let promises = [];
        let times = {};


        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Application-Id': 'cd8dab5e',
                'X-Api-Key': '3b67e6f052bc7121e2f6bcb917024443'
            }
        };

        for (let key in destpoints) {
            times[key] = {};
            let dataPost = {
                "locations": [
                    {
                        "id": "Facility",
                        "coords": {
                            "lat": sourcepoint.geometry.coordinates[1],
                            "lng": sourcepoint.geometry.coordinates[0]
                        }
                    },
                    {
                        "id": "DataZone centroid",
                        "coords": {
                            "lat": destpoints[key].geometry.coordinates[1],
                            "lng": destpoints[key].geometry.coordinates[0]
                        }
                    }
                ],
                "departure_searches": [
                    {
                        "id": "departure search example",
                        "departure_location_id": "Facility",
                        "arrival_location_ids": [
                            "DataZone centroid"
                        ],
                        "transportation": {
                            "type": "driving"
                        },
                        "departure_time": "2020-02-20T10:00:00Z",
                        "properties": ["travel_time", "distance", "route"]
                    }
                ]
            };

            promises.push(
                axios.post('https://api.traveltimeapp.com/v4/routes', dataPost, axiosConfig)
                    .then((res) => {
                        let minute = (res.data.results[0].locations[0].properties[0].travel_time) / 60;

                        let time = Math.round(minute * 10) / 10;
                        times[key]["Car"] = time;

                    })
                    .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    })
            );


/*            dataPost.departure_searches[0].transportation.type = "public_transport";
            promises.push(
                axios.post('https://api.traveltimeapp.com/v4/routes', dataPost, axiosConfig)
                    .then((res) => {
                        let minute = (res.data.results[0].locations[0].properties[0].travel_time) / 60;

                        let time = Math.round(minute * 10) / 10;
                        times[key]["PT"] = time;

                    })
                    .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    })
            );*/
        }

        console.log(times);
        Promise.all(promises).then(() =>this.calculatePTravelTimes(sourcepoint, destpoints,times,geo));
    };
    calculatePTravelTimes = async (sourcepoint, destpoints,times, geo) => {

        let promises = [];

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Application-Id': 'cd8dab5e',
                'X-Api-Key': '3b67e6f052bc7121e2f6bcb917024443'
            }
        };

        for (let key in destpoints) {

            let dataPost1 = {
                "locations": [
                    {
                        "id": "Facility",
                        "coords": {
                            "lat": sourcepoint.geometry.coordinates[1],
                            "lng": sourcepoint.geometry.coordinates[0]
                        }
                    },
                    {
                        "id": "DataZone centroid",
                        "coords": {
                            "lat": destpoints[key].geometry.coordinates[1],
                            "lng": destpoints[key].geometry.coordinates[0]
                        }
                    }
                ],
                "departure_searches": [
                    {
                        "id": "departure search example",
                        "departure_location_id": "Facility",
                        "arrival_location_ids": [
                            "DataZone centroid"
                        ],
                        "transportation": {
                            "type": "public_transport"
                        },
                        "departure_time": "2020-02-20T10:00:00Z",
                        "properties": ["travel_time", "distance", "route"]
                    }
                ]
            };

            promises.push(
                axios.post('https://api.traveltimeapp.com/v4/routes', dataPost1, axiosConfig)
                    .then((res) => {
                        let minute = (res.data.results[0].locations[0].properties[0].travel_time) / 60;

                        let time = Math.round(minute * 10) / 10;
                        times[key]["PT"] = time;

                    })
                    .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    })
            );
        }


        console.log(times);
        Promise.all(promises).then(() =>this.checkChanges(times,geo));
    };


    checkChanges = async(times, geo)  => {
        console.log("most leptem be");

        for (let key in times) {

            for (let i = 0; i < geo.features.length; i++){
                if(geo.features[i].properties.DataZone === key){
                    //compare new time with old time for neighbours
                    if(geo.features[i].properties.CarTravelTimes[this.state.addFacility] > times[key]["Car"]){

                        geo.features[i].properties.CarTravelTimes[this.state.addFacility] = times[key]["Car"]
                    }
                    if(geo.features[i].properties.PublicTransportTravelTimes[this.state.addFacility] > times[key]["PT"]){

                        geo.features[i].properties.PublicTransportTravelTimes[this.state.addFacility] = times[key]["PT"]
                    }
                }
                //assign  0 travel time to data zone facility is located in
                else if(geo.features[i].properties.DataZone === this.state.addDataZone) {

                    geo.features[i].properties.CarTravelTimes[this.state.addFacility] = "1.0";
                    geo.features[i].properties.PublicTransportTravelTimes[this.state.addFacility] = "1.0";
                }
                else{

                }

            }
        }
        console.log("checkchanges finished");
        this.props.parentCallback(geo);
    };

    //to load all data zones in dropdown options
   populateDropdown = (data) => {
       let code;
       let coords;
       for (let i = 0; i < data.features.length; i++) {
           current = data.features[i].properties;
           expression = current.Name + " (" + current.DataZone + ")";
           datazones[i] = {
               key: expression,
               text: expression,
               value: current.DataZone,
               style:{color:"deepskyblue", background:"#243665", borderColor:"deepskyblue"},
           };
           //also populates datazone coordinates dictionary
           code = parseInt(current.DataZone.substr(1));
           coords = data.features[i].geometry.coordinates[0];
           datazoneCoordinates[code] = coords;
       }
       return datazones;
   };



    render() {

        const geojson = this.props.geo;

        return(
            <Control position="topright" >
                <Modal  size = "tiny"
                    trigger={ <Button onClick = {this.handleOpen}
                                      style = {{color: "deepskyblue", background:"#243665"}}
                                      circular icon> <Icon name = "plus" size ="large"></Icon>   </Button>}
                        onClose={this.handleClose}
                        open={this.state.modalOpen}
                       >
                    <Modal.Header className = "modalHeader">
                        <p>Adding facility</p>
                    </Modal.Header>
                    <Modal.Content className = "modalContent" >
                        <React.Fragment >
                    <Dropdown className = "modalDropdown"
                        placeholder='Select Facility'
                        fluid
                        selection
                              onChange = {this.handleFacilityChange}
                        options={facilities}
                    />
                            {<br/>}

                            <Dropdown className = "modalDropdown"
                                placeholder='Select Data Zone'
                                fluid
                                search
                                selection
                                onChange = {this.handleDataZoneChange}
                                options={this.populateDropdown(geojson)}
                            />

                        </React.Fragment>
                    </Modal.Content>
                    <Modal.Actions className = "modalAction">
                        <Button className = "modalButton"
                            onClick={()=> this.handleClose(geojson)}
                            positive
                            labelPosition='right'
                            icon='checkmark'
                            content='Done'
                        />
                    </Modal.Actions>
            </Modal>
            </Control>

        );
    }
}
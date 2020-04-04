import React,  { createRef, Component } from 'react';
import { Map, TileLayer, GeoJSON, Marker} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './index.css';
import Spinner from './Spinner';
import Scale from './Scale';
import AddButton from "./AddButton";
import SideButtons from "./SideButtons";
import Header from "./Header"
import ChangeList from "./ChangeList";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import L from 'leaflet';
require('@babel/register')({
    presets: ['es2015', 'react']
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

let mapCenter;
let zoomLevel;
let minZoomLevel;
let time = 0;
const tileLayerAtrribute = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
let tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let glasgow = "https://api.npoint.io/aa3a9094c684db09d0f8";
let methodBoolean = true;

export const doDecrement = (prevState) => ({
    counter: prevState.counter - 1,
});


class CityMap extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isFetching: true,
            geo: [],
            domain: "City",
            method: 'Car',
            city: "Glasgow",
            changesList:[],
            activeDomains: {
                "City": true,
                "GP": false,
                "PrimarySchool": false,
                "SecondarySchool": false,
                "PostOffice": false,
                "ShoppingFacilities": false
            },

        };
    }
    geoJSONRef = React.createRef();

    callbackFunction = (childData) => {
        this.geoJSONRef.current.leafletElement.clearLayers();
        this.geoJSONRef.current.leafletElement.addData(childData);

        this.setState({geo: childData});

    };

    callbackFunctionSubmit = (changes) => {
        this.setState({
            changesList: changes
        });
    };

    componentDidMount() {
        document.title = 'CTYPLNR';
        this.setState({isFetching: true});
        axios.get(glasgow).then(res => {
            this.setState({
                isFetching: false,
                geo: res.data,
                domain: 'City',
            });
        });

    };

    getGlasgow = () => {


    };

    changeMethod = (method) => {
        if(method === "PublicTransport" && (this.state.domain === "PrimarySchool" || this.state.domain === "SecondarySchool")){
            this.changeDomain("City");
        }
        this.setState({
            method: method
        });

    };

    changeDomain = (domain) => {
        let stateCopy = Object.assign({}, this.state);
        stateCopy.activeDomains[this.state.domain] = false;
        stateCopy.domain = domain;
        stateCopy.activeDomains[stateCopy.domain] = true;
        this.setState(
            stateCopy
        );
    };

    changeCity = (city) => {
        let url = "";
        if (city === "Glasgow"){
            url = "https://api.npoint.io/aa3a9094c684db09d0f8"
        }
        else{
            url = "https://api.npoint.io/f7c3649ae02eea7f5e92"
        }

        this.setState({isFetching: true});
        axios.get(url).then(res => {
            this.setState({
                isFetching: false,
                geo: res.data,
                city: city
            });
        });
        methodBoolean = true;

    };


   render() {


        const { isFetching, geo, domain, method,city} = this.state;

        if(city === "Glasgow"){
            mapCenter = [55.8595, -4.2518];
            zoomLevel = 12;
            minZoomLevel = zoomLevel;
        }
        else{
            mapCenter = [55.933251, -3.268267];
            zoomLevel = 12;

        }

        let map;
        if(isFetching){
            map = <div className = "spinner-container"><Spinner></Spinner></div>
        }
        else{
                map = <Map className="map"
                           minZoom = {zoomLevel}
                           center={mapCenter}
                           zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={tileLayerAtrribute}
                        url={tileLayerUrl}
                    />


                    <AddButton
                        geo={this.state.geo}
                        parentCallback={this.callbackFunction}
                        parentCallbackSumbit = {this.callbackFunctionSubmit}


                    />
                    <ChangeList
                        changes={this.state.changesList}
                        />

                    <Scale
                        method = {this.state.method}
                    />

                    <GeoJSON
                        data={geo}
                        ref={this.geoJSONRef}
                        style={getStyle}
                        onEachFeature={onEachFeature}/>
                </Map>

        }


        function getStyle(feature){

            if(feature.properties.CarTravelTimes["GP"] === 1){

            }

            let timeDiff;
            if(domain !== "City"){
                if(method === "Car") {

                    time = feature.properties.CarTravelTimes[domain];


                    timeDiff = 1;

                }
                else{
                        time = feature.properties.PublicTransportTravelTimes[domain];
                        timeDiff = 3;
                    }
                }
            else{

                return{
                color:"black",
                    weight: 1.5,
                    fillOpacity:0.4

                 }
            }

                if(time >= 0 && time < timeDiff){

                    return{
                        color: "navy",
                        weight: 1.5
                    }
                }
                else if(time >= timeDiff && time < timeDiff*2){

                    return{
                        color:"royalblue",
                        weight: 1.5,
                        fillOpacity:0.5
                    }
                }
                else if(time >= timeDiff*2 && time < timeDiff*3){

                    return{
                        color:"seagreen",
                        weight: 1.5,
                        fillOpacity:0.5
                    }
                }
                else if(time >= timeDiff*3 && time < timeDiff*4){
                    return{
                        color:"yellow",
                        weight: 1.5,
                        fillOpacity:0.5
                    }

                }
                else if(time >= timeDiff*4 && time < timeDiff*5){
                    return{
                        color:"orange",
                        weight: 1.5,
                        fillOpacity:0.5
                    }

                }
                else if(time >= timeDiff*5){
                    return{
                        color:"maroon",
                        weight: 1.5,
                        fillOpacity:0.5
                    }
            }
                else{
                return {
                    color:"white",
                    weight: 1.5,
                    fillOpacity:0.75
                }}
            }

       function onEachFeature (feature, layer) {
           layer.bindPopup("Name: " + feature.properties.Name + "<br>" + "DataCode: " + feature.properties.DataZone);
       }

       return (

            <div className = "main"

            >

              <Header
                  geoJSON={this.state.geo}
                  city = {this.state.city}
                  method = {this.state.method}
                  changeMethod = {this.changeMethod}
                  changeCity = {this.changeCity}
                  parentCallback={this.callbackFunction}
              />

                {map}

                <SideButtons
                    method = {this.state.method}
                    changeDomain = {this.changeDomain}
                    activeDomains = {this.state.activeDomains}
                    />

                </div>
        );
    }
}

export default CityMap;

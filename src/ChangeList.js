import React from 'react';
import {List, Segment, Accordion, Icon} from "semantic-ui-react";
import Control from "react-leaflet-control";
import _ from 'lodash'
import './index.css';

export default class ChangeList extends React.Component {

    populateContents = (array) =>{
        console.log(array);
        let arrayOfContents = [];

        for(let i=0; i<array.length; i++){
            let currentContent = "";

            for(let k = 0; k<Object.keys(array[i]["NeighbouringDataZones"]).length; k++) {

                let carTime;
                let ptTime;
                //get key and value, create a string (line) ,push string line to current content
                let dz = Object.keys((array[i]["NeighbouringDataZones"][k]));
                if("CarChanges" in array[i]["NeighbouringDataZones"][k][dz]) {

                    carTime = "Car: " + array[i]["NeighbouringDataZones"][k][dz]["CarChanges"] + "";
                }
                if("PTChanges" in array[i]["NeighbouringDataZones"][k][dz]) {
                    ptTime = "Public Transport: " + array[i]["NeighbouringDataZones"][k][dz]["PTChanges"];
                }

                let line = dz + "\n";

                currentContent = currentContent + line;
                if(carTime) {
                    line = carTime + "\n";
                    currentContent = currentContent+line;
                }
                if(ptTime){
                    line = ptTime +"\n"+"\n";
                    currentContent = currentContent+line;
                }

            }
            //push string (currentContent) to array
            arrayOfContents.push(currentContent);

        }
        console.log(arrayOfContents.toString());
        return arrayOfContents;

    };


    render() {


        const changes = this.props.changes;
        const contents = this.populateContents(changes);

        /*const level1Panels = _.times(changes.length, (i) => ({
            key: `panel-${i}`,
            title: changes[i]["Facility"].concat(" in " + changes[i]["DataZone"]),
            content: {content : Level1Content}
        }));

        const Level1Content = (
            <div>
                <Accordion.Accordion panels={level1Panels} />
            </div>
        );*/



        const panels = _.times(changes.length, (i) => ({
            key: `panel-${i}`,
            title: changes[i]["Facility"].concat(" in " + changes[i]["DataZone"]),
            content:  {content : contents[i]}
        }));


        return(
            <Control>
                <Segment inverted style={{background: "rgba(36,54,101,0.7)", height:"57vh", width:"14vw"}}>
                    Facilites recently added:
                    <Accordion style={{overflow: 'auto', maxHeight: 375}} className="accordion"
                               exclusive={false}
                               panels={panels}
                               styled
                               fluid
                    >
                    </Accordion>
                </Segment>
            </Control>
        );
    }
};
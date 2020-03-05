import React from 'react';
import {List, Segment, Accordion, Icon} from "semantic-ui-react";
import Control from "react-leaflet-control";
import _ from 'lodash'
import './index.css';

let contentArray;
export default class ChangeList extends React.Component {

    /*populateContents = (array) =>{
        for(let i=0; i<array.length; i++){
            let currentContent = [];
            for(let k = 0; k<Object.keys(array[i]["NeighboringDataZone"]).length; k++) {
                currentContent.push(array[i]["NeighbouringDataZones"])
            }
        }

    };*/

    render() {


        const changes = this.props.changes;



        const panels = _.times(changes.length, (i) => ({
            key: `panel-${i}`,
            title: changes[i]["Facility"].concat(" in " + changes[i]["DataZone"]),
            content: "New travel time from ".concat(
                Object.keys(changes[i]["NeighbouringDataZones"][0])[0] +" is: x",

            )
        }));
        return(
            <Control>
                <Segment inverted style={{background: "rgba(36,54,101,0.7)", height:"57vh", width:"14vw"}}>
                    <Accordion className="accordion"
                        exclusive={false}
                        panels={panels}
                               styled
                        fluid
                        >


                    </Accordion>
                    {/*<React.Fragment>
                        <List>
                            <List.Item className="list-group">
                                {anyad.map(listitem => (
                                    <List.Content key={listitem} className="list-group-item list-group-item-primary">
                                        {listitem}
                                    </List.Content>
                                ))}
                            </List.Item>
                            <List.Item>
                                <List.Icon name='heart' />
                                <List.Content>Hey Babe, I love you</List.Content>
                            </List.Item>
                        </List>
                    </React.Fragment>*/}
                </Segment>
            </Control>
        );
    }
}
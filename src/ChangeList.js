import React from 'react';
import {List, Segment} from "semantic-ui-react";
import Control from "react-leaflet-control";
import './index.css';
export default class ChangeList extends React.Component {
    state = {

    };


    render() {


        const anyad = this.props.dataZone;
        console.log(anyad);
        const listitems = ["List Item 1", "List Item 2", "List Item 3", "kaka"]


        return(
            <Control>
                <Segment inverted style={{background: "rgba(36,54,101,0.7)", height:"57vh", width:"14vw"}}>
                    <React.Fragment>
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
                    </React.Fragment>
                </Segment>
            </Control>
        );
    }
}
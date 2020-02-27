import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";
import Control from "react-leaflet-control";
export default class Scale extends React.Component {

    render() {
        return(
            <Control position="bottomright" classname >
                <Segment inverted style={{background: "#243665", height:"110px"}}>
                    <Header color = "black" inverted>
                        <Header.Content style = {{color: "deepskyblue"}}>Travel times in minutes</Header.Content>
                    </Header>
                    <Grid  columns="equal" style={{ width: '340px'}} padded>
                        <Grid.Column style = {{background:'navy'}}>0 - 1</Grid.Column>
                        <Grid.Column style = {{background:'royalblue'}}>1 - 2</Grid.Column>
                        <Grid.Column style = {{background:'seagreen'}}>2 - 3</Grid.Column>
                        <Grid.Column color = "yellow">3 - 4</Grid.Column>
                        <Grid.Column style = {{background:'darkorange'}}>4 - 5</Grid.Column>
                        <Grid.Column style = {{background:'maroon'}}>5+</Grid.Column>
                    </Grid>
                </Segment>

            </Control>
        );
    }
}
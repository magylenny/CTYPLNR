import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";
import Control from "react-leaflet-control";
export default class Scale extends React.Component {

    render() {
        let method = this.props.method;
        let timeDiff,segment
        if(method === "Car") {
            timeDiff = 1;
            segment = <Segment inverted style={{background: "rgba(36,54,101,0.7)", height:"100%", width:"24vw"}}>
                <Header inverted>
                    <Header.Content style = {{color: "deepskyblue"}}>Travel times in minutes</Header.Content>
                </Header>
                <Grid  columns="equal" style={{ width: '22vw', height:"100%"}} padded>
                    <Grid.Column style = {{background:'navy'}}>0 - {timeDiff}</Grid.Column>
                    <Grid.Column style = {{background:'royalblue'}}>{timeDiff} - {timeDiff*2}</Grid.Column>
                    <Grid.Column style = {{background:'seagreen'}}>{timeDiff*2} - {timeDiff*3}</Grid.Column>
                    <Grid.Column color = "yellow">{timeDiff*3} - {timeDiff*4}</Grid.Column>
                    <Grid.Column style = {{background:'darkorange'}}>{timeDiff*4} - {timeDiff*5}</Grid.Column>
                    <Grid.Column style = {{background:'maroon'}}>{timeDiff*5}+</Grid.Column>
                </Grid>
            </Segment>
        }
        else{
            timeDiff = 3;
            segment = <Segment inverted style={{background: "#243665", height:"100%", width:"26.5vw"}}>
                <Header inverted>
                    <Header.Content style = {{color: "deepskyblue"}}>Travel times in minutes</Header.Content>
                </Header>
                <Grid  style={{height:"100%"}} padded>
                    <Grid.Column style = {{background:'navy', width:'3.75vw'}}>0 - {timeDiff}</Grid.Column>
                    <Grid.Column style = {{background:'royalblue', width:'3.75vw'}}>{timeDiff} - {timeDiff*2}</Grid.Column>
                    <Grid.Column style = {{background:'seagreen', width:'3.75vw'}}>{timeDiff*2} - {timeDiff*3}</Grid.Column>
                    <Grid.Column style = {{width:"4.5vw"}} color = "yellow">{timeDiff*3} - {timeDiff*4}</Grid.Column>
                    <Grid.Column style = {{background:'darkorange', width:'5vw'}}>{timeDiff*4} - {timeDiff*5}</Grid.Column>
                    <Grid.Column style = {{background:'maroon', width:'3.75vw'}}>{timeDiff*5}+</Grid.Column>
                </Grid>
            </Segment>
        }
        return(
            <Control position="bottomright">
                {segment}

            </Control>
        );
    }
}
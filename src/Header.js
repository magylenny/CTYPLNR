import React from 'react';
import {Button, Grid, Icon} from "semantic-ui-react";
import Title from './Title';
import './index.css';
export default class Header extends React.Component {

    render() {
        let city = this.props.city;
        let method = this.props.method;
        let glasgow;
        let car;

        if(city === "Glasgow"){
            glasgow = true;
        }
        else{
            glasgow=false;
        }
        if(method === "Car"){
            car = true;
        }
        else{
            car = false;
        }
        return (
            <div className="header">
                <Grid columns="equal">
                    <Grid.Column>
                        <div className="methodButtons">
                            <Button.Group inverted size='medium' color="blue">
                                <Button active = {car} icon onClick={ () => this.props.changeMethod('Car')}><Icon name='car'
                                                                                      size="big"/><br/><br/> Car</Button>
                                <Button.Or/>
                                <Button active = {!car} icon onClick={ () => this.props.changeMethod('PublicTransport')}><Icon name='bus'
                                                                                                  size="big"/><br/><br/>Public
                                    Transport</Button>
                            </Button.Group>
                        </div>
                    </Grid.Column>

                    <Title/>

                    <Grid.Column textAlign='right'>
                        <div className="cityButtons">
                            <Button.Group inverted size='huge' color="blue">
                                <Button active = {glasgow} onClick={() => this.props.changeCity("Glasgow")}>Glasgow</Button>
                                <Button.Or/>
                                <Button active = {!glasgow} onClick={() => this.props.changeCity("Edinburgh")}>Edinburgh</Button>
                            </Button.Group>
                        </div>
                    </Grid.Column>

                </Grid>
            </div>
        );
    }
}
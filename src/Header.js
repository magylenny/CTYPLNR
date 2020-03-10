import React from 'react';
import {Button, Grid, Icon} from "semantic-ui-react";
import Title from './Title';
import Import from"./Import";
import './index.css';
export default class Header extends React.Component {

    gettingImported = (imported) =>{
        this.props.parentCallback(imported);
    }

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
                <Grid>
                    <Grid.Column width = {2}>
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
                    </Grid.Column >
                  <Grid.Column width = {5}>
                      <div className = "importButtons">
                      <Import
                          gettingImportedJson={this.gettingImported}
                      />
                  </div>
                  </Grid.Column>
                    <Grid.Column width = {5}>
                    <Title/>
                    </Grid.Column>

                    <Grid.Column textAlign='right' width={4}>
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
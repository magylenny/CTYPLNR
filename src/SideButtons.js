import React from 'react';
import {Button, Icon} from "semantic-ui-react";
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
export default class Title extends React.Component {


    render() {

        const dict = this.props.activeDomains;
        let method = this.props.method;
        let methodBoolean;
        if (method === 'Car') {

            methodBoolean = true;
        } else {
            methodBoolean = false;
        }

        return (
            <Router>
            <div className="side-bar-container">
                {
                    methodBoolean ?

                        <div>
                            <Button.Group inverted vertical icon color="blue" size="big" className="side-bar">
                                <Button active={dict["City"]} icon onClick={() => this.props.changeDomain('City')}><Icon
                                    name='globe' size="big"/>
                                    <br/>
                                    <br/>
                                    City<br/>Map
                                </Button>
                                <Button active={dict["GP"]} icon onClick={() => this.props.changeDomain('GP')}>
                                    <Icon name='doctor' size="big"/>
                                    <br/>
                                    <br/>
                                    GPs
                                </Button>
                                <Button active={dict["PrimarySchool"]} icon onClick={() => this.props.changeDomain('PrimarySchool')}>
                                    <Icon name='building' size="big"/>
                                    <br/>
                                    <br/>
                                    Primary<br/> Schools
                                </Button>
                                <Button active={dict["SecondarySchool"]} icon onClick={() => this.props.changeDomain('SecondarySchool')}>
                                    <Icon name='building' size="big"/>
                                    <br/>
                                    <br/>
                                    Secondary<br/>Schools
                                </Button>
                                <Button active={dict["PostOffice"]} icon onClick={() => this.props.changeDomain('PostOffice')}>
                                    <Icon name='envelope' size="big"/>
                                    <br/>
                                    <br/>
                                    Post<br/> Offices
                                </Button>
                                <Button active={dict["ShoppingFacilities"]} icon onClick={() => this.props.changeDomain('ShoppingFacilities')}>
                                    <Icon name='shop' size="big"/>
                                    <br/>
                                    <br/>
                                    Shopping<br/> Facilities
                                </Button>
                            </Button.Group>
                            <div className="restnormal">
                                <div className="footer">
                                    <p>Leonard Magyar - University of Strathcylde 2019/2020</p>
                                </div>
                            </div>
                        </div>

                        :
                        <div>
                            <Button.Group inverted vertical icon color="blue" size="big" className="side-bar">
                                <Button active={dict["City"]} icon onClick={() => this.props.changeDomain('City')}><Icon name='globe'
                                                                                                      size="big"/>

                                    <br/>
                                    <br/>
                                    City<br/>Map
                                </Button>
                                <Button active={dict["GP"]} icon onClick={() => this.props.changeDomain('GP')}>
                                    <Icon name='doctor' size="big"/>
                                    <br/>
                                    <br/>
                                    GPs
                                </Button>
                                <Button active={dict["PostOffice"]} icon onClick={() => this.props.changeDomain('PostOffice')}>
                                    <Icon name='envelope' size="big"/>
                                    <br/>
                                    <br/>
                                    Post<br/> Offices
                                </Button>
                                <Button active={dict["ShoppingFacilities"]} icon onClick={() => this.props.changeDomain('ShoppingFacilities')}>
                                    <Icon name='shop' size="big"/>
                                    <br/>
                                    <br/>
                                    Shopping<br/> Facilities
                                </Button>
                            </Button.Group>

                            <div className="rest">
                                <div className="footerrest">
                                    <p>Leonard Magyar - University of Strathcylde 2019/2020</p>
                                </div>
                            </div>
                        </div>
                }
            </div>
            </Router>
        );
    }
}
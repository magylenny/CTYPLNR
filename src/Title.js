import React from 'react';
import {Grid, Icon} from "semantic-ui-react";
import './index.css';
export default class Title extends React.Component {

    render() {
        return(
            <Grid.Column textAlign='center' className = "title">
                <div className = "header-text">
                    <p>Glasgow Planner</p>
                </div>
                <div className = "header-icon">
                    <Icon inverted  name='pen square' color = "blue" size = "huge" />
                </div>
            </Grid.Column>
        );
    }
}
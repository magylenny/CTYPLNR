import ReactDOM from "react-dom";
import {Button, Icon} from "semantic-ui-react";
import React, { Component } from "react";

export default class Import extends Component {

    onChange = (event) => {
        var reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(event.target.files[0]);
    };

    onReaderLoad = (event) =>{
        this.props.gettingImportedJson(JSON.parse(event.target.result));
        /*alert(event.target.result);
        var obj = JSON.parse(event.target.result);
        console.log(obj.features[5]);*/
    }

    render() {
        return (
            <div>
                <Button.Group inverted vertical color="blue">
                    <Button icon labelPosition="left" as="label" htmlFor="file" type="button">
                        <Icon name = "upload"/>
                        Import
                    </Button>
            <input type="file" accept="application/JSON" id="file" style={{ visibility: "hidden" }} onChange={this.onChange} />
                    <Button icon labelPosition="left" >
                        <Icon name = "download"/>
                        Export
                    </Button>
                </Button.Group>
                </div>

        );
    }
}
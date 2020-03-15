import ReactDOM from "react-dom";
import {Button, Icon} from "semantic-ui-react";
import ReactFileReader from 'react-file-reader';
import React, { Component } from "react";



export default class Import extends Component {

    onChange = (event) => {
        var reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(event.target.files[0]);

    };

    onReaderLoad = (event) => {
        console.log(JSON.parse(event.target.result));
        this.props.gettingImportedJson(JSON.parse(event.target.result));
        /*alert(event.target.result);
        var obj = JSON.parse(event.target.result);
        console.log(obj.features[5]);*/
    };

    render(url) {
        const downloadFile = async () => {
            console.log(this.props.geoJSON);
            const fileName = "file";
            const blob = new Blob([JSON.stringify(this.props.geoJSON)],{type:'application/json'});
            const href = await URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = fileName + ".json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        return (
            <div>
                <Button.Group inverted vertical color="blue">
                    <Button icon labelPosition="left" as="label" htmlFor="file" type="button">
                        <Icon name = "upload"/>
                        Import
                    </Button>
            <input type="file" accept="application/JSON" id="file" style={{ visibility: "hidden" }} onChange={this.onChange} />
                    <Button icon labelPosition="left" onClick={downloadFile}>
                        <Icon name = "download"/>
                        Export
                    </Button>
                </Button.Group>
                </div>

        );
    }
}
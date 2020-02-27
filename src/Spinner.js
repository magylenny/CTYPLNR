import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import React from 'react';
export default class Spinner extends React.Component {

    render() {
        return(
            <Loader
                type="Oval"
                color="deepskyblue"
                height={300}
                width={300}


            />
        );
    }
}
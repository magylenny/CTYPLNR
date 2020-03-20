
import React from 'react';
import GlasgowMap from "../src/GlasgowMap.js";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import axios from "axios";
import AddButton from "../src/AddButton";
configure({ adapter: new Adapter() });
global.mount = mount;
global.render = render;
global.shallow = shallow;

const {describe, it} = require('mocha');
const { assert } = require('chai');

const getGlasgowData =function(){
    axios.get("https://api.npoint.io/aa3a9094c684db09d0f8").then(res => {
        return res.data;
    });
};

const getEdinburghData = function(){

    axios.get("https://api.npoint.io/f7c3649ae02eea7f5e92").then(res => {
        return res.data;
    });
};
const glasgowData = getGlasgowData();
const edinburghData = getEdinburghData();

describe('GlasgowMap/Local states', () => {
    const wrapper = shallow(<GlasgowMap/>);
    it('should change method', () => {

        expect(wrapper.instance().state.method).equal("Car");
        wrapper.instance().changeMethod("PublicTransport");
        expect(wrapper.instance().state.method).equal("PublicTransport");

    });
    /*it('should change city', () => {

        expect(wrapper.instance().state.city).equal("Glasgow");
        wrapper.instance().changeCity("Edinburgh");
        console.log(wrapper.instance().state.city);
        expect(wrapper.instance().state.city).equal("Edinburgh");

    });*/
    it('should change domain', () => {

        expect(wrapper.instance().state.domain).equal("City");
        wrapper.instance().changeDomain("PostOffice");
        expect(wrapper.instance().state.domain).equal("PostOffice");

    });
    /*it('should get data of glasgow', () => {

        expect(wrapper.instance().state.data).equal([]);
        wrapper.instance().getGlasgow();
        expect(wrapper.instance().state.data).equal(glasgowData);

    });*/
    /*it('should change data from added facility/import', () => {

        expect(wrapper.instance().state.method).equal("Car");
        wrapper.instance().changeMethod("PublicTransport");
        expect(wrapper.instance().state.method).equal("PublicTransport");

    });*/

});

describe('AddButton/Unit tests', function () {
    const wrapper = shallow(<AddButton/>);
    it("translating datacode to data zone name", function () {


        expect(wrapper.instance().translateToName("S01010225", glasgowData).equal("Sighthill-01"));


    })
});
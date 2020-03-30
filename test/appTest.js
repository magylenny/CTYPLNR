
import React from 'react';
import sinon from 'sinon';
import "babel-polyfill";
import GlasgowMap from "../src/GlasgowMap.js";
import {Button, Grid, Icon} from "semantic-ui-react";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import axios from "axios";
import Header from "../src/Header.js";
import AddButton from "../src/AddButton";
import SideButtons from "../src/SideButtons";
import Title from "../src/Title";
import Import from "../src/Import";

configure({ adapter: new Adapter() });
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;

const {describe, it, before, after} = require('mocha');
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
describe('GlasgowMap.js Unit/Light integration(shallow)', () => {
    const wrapper = shallow(<GlasgowMap/>);
    it('should change GlasgowMap method', () => {

        expect(wrapper.instance().state.method).equal("Car");
        wrapper.instance().changeMethod("PublicTransport");
        expect(wrapper.instance().state.method).equal("PublicTransport");

    });
    it('should change GlasgowMap domain', () => {

        expect(wrapper.instance().state.domain).equal("City");
        wrapper.instance().changeDomain("PostOffice");
        expect(wrapper.instance().state.domain).equal("PostOffice");

    });
    //async testing????
    /*it('should change city', () => {

        expect(wrapper.instance().state.city).equal("Glasgow");
        wrapper.instance().changeCity("Edinburgh");
        console.log(wrapper.instance().state.city);
        expect(wrapper.instance().state.city).equal("Edinburgh");

    });*/

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

    it('should render Header component', () => {
        expect(wrapper.find(Header)).to.have.length(1);
    });

    it('should render SideButtons component', () => {
        expect(wrapper.find(SideButtons)).to.have.length(1);
    });

    it('should change SideButtons method prop', () => {
        let sideButtonWrapper = wrapper.find(SideButtons);

        expect(sideButtonWrapper.props().method).equal("PublicTransport");

        wrapper.instance().changeMethod("Car");
        sideButtonWrapper = wrapper.find(SideButtons);
        expect(sideButtonWrapper.props().method).equal("Car");

    });

    it('should change Header method prop', () => {
        let headerWrapper = wrapper.find(Header);

        expect(headerWrapper.props().method).equal("Car");

        wrapper.instance().changeMethod("PublicTransport");
        headerWrapper = wrapper.find(Header);
        expect(headerWrapper.props().method).equal("PublicTransport");

    });

    it('should change SideButtons activeDomain prop', () => {
        let sideButtonWrapper = wrapper.find(SideButtons);
        let activeDomainDict = {
            "City": false,
            "GP": false,
            "PrimarySchool": false,
            "SecondarySchool": false,
            "PostOffice": true,
            "ShoppingFacilities": false
        };

        expect(sideButtonWrapper.props().activeDomains).to.eql(activeDomainDict);

        wrapper.instance().changeDomain("GP");
        sideButtonWrapper = wrapper.find(SideButtons);

        activeDomainDict = {
            "City": false,
            "GP": true,
            "PrimarySchool": false,
            "SecondarySchool": false,
            "PostOffice": false,
            "ShoppingFacilities": false
        };

        expect(sideButtonWrapper.props().activeDomains).to.eql(activeDomainDict);

    });
});

describe('Header.js Unit/Light integration', () =>{
        const wrapper = shallow(<GlasgowMap/>);
        let headerWrapper = shallow(<Header changeMethod = {wrapper.instance().changeMethod}
                                            changeDomain = {wrapper.instance().changeDomain}/>);
    it('should render Grid component', () =>{
        expect(headerWrapper.find(Grid)).to.have.length(1);
    });
    it('should render Grid.Column component', () =>{
        expect(headerWrapper.find(Grid.Column)).to.have.length(4);
    });
    it('should render Button component', () =>{
        expect(headerWrapper.find(Button)).to.have.length(4);
    });
    it('should render Import component', () =>{
        expect(headerWrapper.find(Import)).to.have.length(1);
    });

    it('should render Title component', () =>{
        expect(headerWrapper.find(Title)).to.have.length(1);
    });
    it('should change parent`s method state', () => {
        expect(wrapper.state().method).equal("Car");
        headerWrapper.find(Button).at(1).simulate('click');
        expect(wrapper.state().method).equal("PublicTransport");
    });
});

describe('Import.js Unit/Light integration', () =>{
    const importWrapper = shallow(<Import/>);
    it('should render Button component', () =>{
        expect(importWrapper.find(Button)).to.have.length(2);
    });
    it('should render hidden input component', () =>{
        expect(importWrapper.find('input')).to.have.length(1);
    });

});

describe('Title Unit/Light integration', () =>{
    const titleWrapper = shallow(<Title/>);
    it('should render Grid component', () =>{
        expect(titleWrapper.find(Grid)).to.have.length(0);
    });
    it('should render Grid.Column component', () =>{
        expect(titleWrapper.find(Grid.Column)).to.have.length(1);
    });
    it('should render Icon component', () =>{
        expect(titleWrapper.find(Icon)).to.have.length(1);
    });
});

describe('SideButtons.js Unit/Light integration', () =>{

    const wrapper = shallow(<GlasgowMap/>);
    let sideButtonWrapper = shallow(<SideButtons activeDomains = {wrapper.state().activeDomains}
                                              method = {wrapper.state().method}
                                              changeDomain = {wrapper.instance().changeDomain}/>);

    it('should render Button components - Car', () => {
        expect(sideButtonWrapper.find(Button)).to.have.length(6);
    });
    it('should change parent`s method state', () => {
        expect(wrapper.state().domain).equal("City");
        sideButtonWrapper.find(Button).at(4).simulate('click');
        expect(wrapper.state().domain).equal("PostOffice");
    });
    it('should render Button components - Public Transport', () => {
        expect(wrapper.state().method).equal("Car");
        wrapper.instance().changeMethod("PublicTransport");
        sideButtonWrapper = shallow(<SideButtons activeDomains = {wrapper.state().activeDomains}
                                                 method = {wrapper.state().method}
                                                 changeDomain = {wrapper.instance().changeDomain}/>);
        expect(sideButtonWrapper.find(Button)).to.have.length(4);
    });
});

/*describe('AddButton.js Unit/Light integration', () =>{

        const addButtonWrapper = shallow(<AddButton geo={edinburghData}/>);
        it('should render Button component', () =>{
            console.log(AddButton.geo);
            expect(addButtonWrapper.find(Button)).to.have.length(2);
        });
        it('should render hidden input component', () =>{
            expect(addButtonWrapper.find('input')).to.have.length(1);
        });
});*/

/*describe('GlasgowMap.js/Header.js/SideButtons.js integration', ()=> {
    const wrapper = shallow(<GlasgowMap/>);
    let sideButtonWrapper = shallow(<SideButtons activeDomains={wrapper.state().activeDomains}
                                                 method={wrapper.state().method}
                                                 changeDomain={wrapper.instance().changeDomain}/>);
    let headerWrapper = shallow(<Header changeMethod={wrapper.instance().changeMethod}
                                        changeDomain={wrapper.instance().changeDomain}/>);
    it("should change SideButtons component via Header component", () => {
        expect(sideButtonWrapper.find(Button)).to.have.length(6);
        headerWrapper.find(Button).at(1).simulate('click');
        expect(sideButtonWrapper.props().method).equal("PublicTransport");
    });
});*/

//testing async
describe('GlasgowMap.js async functions', ()=> {
    const wrapper = shallow(<GlasgowMap/>);
    it('should fetch', () => {

        expect(wrapper.state().isFetching).equal(true);
        wrapper.update();
        expect(wrapper.state().isFetching).equal(true);




    });
});





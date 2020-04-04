import React from 'react';
import sinon from 'sinon';
import "babel-polyfill";
import CityMap from "../src/CityMap.js";
import {Accordion, Button, Dropdown, Grid, Icon, Modal} from "semantic-ui-react";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Control from "react-leaflet-control";
import axios from "axios";
import Header from "../src/Header.js";
import AddButton from "../src/AddButton";
import SideButtons from "../src/SideButtons";
import Title from "../src/Title";
import Import from "../src/Import";
import ChangeList from "../src/ChangeList";
import Scale from "../src/Scale";
import {GeoJSON} from "react-leaflet";


configure({ adapter: new Adapter() });
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;
const {describe, it, before, after} = require('mocha');
const { assert } = require('chai');

let glasgowData, edinburghData;
let wrapper = shallow(<CityMap/>);

function asyncGetEdinburghData(){
    return axios.get("https://api.npoint.io/f7c3649ae02eea7f5e92").then(res =>{
        return res.data;
    })
}
function asyncGetGlasgowData(){
    return axios.get("https://api.npoint.io/aa3a9094c684db09d0f8").then(res =>{
        return res.data;
    })
}
function asyncUpdate(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            wrapper.update();
            resolve();
        }, 17000)
    });
}
function quickUpdate(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            wrapper.update();
            resolve();
        }, 17000)
    });
}

describe('CityMap Unit/Integration(shallow)', async() => {
    before(async function(){
        await asyncUpdate();
        glasgowData = await asyncGetGlasgowData();
        edinburghData = await asyncGetEdinburghData();
    });
    it('should fetch data (glasgow by default)',() => {
        expect(wrapper.state().geo).to.eql(glasgowData);
    });

    it('should change CityMap`s method of travel state by component method to Public Transport', () => {

        expect(wrapper.instance().state.method).equal("Car");
        wrapper.instance().changeMethod("PublicTransport");
        expect(wrapper.instance().state.method).equal("PublicTransport");

    });

    it('should change CityMap`s domain state by component method', () => {
        expect(wrapper.instance().state.domain).equal("City");
        wrapper.instance().changeDomain("PostOffice");
        expect(wrapper.instance().state.domain).equal("PostOffice");
    });

    it('should change CityMap`s city state to Edinburgh by component method ',async() => {
        expect(wrapper.instance().state.city).equal("Glasgow");
        wrapper.instance().changeCity("Edinburgh");
        await quickUpdate();
        expect(wrapper.instance().state.city).equal("Edinburgh");
    });

    it('should render Header`s component', () => {
        expect(wrapper.find(Header)).to.have.length(1);
    });

    it('should render SideButtons` component', () => {
        expect(wrapper.find(SideButtons)).to.have.length(1);
    });
    it('should render ChangeList component', () =>{
        expect(wrapper.find(ChangeList)).to.have.length(1);
    });
    it('should render Scale component', () =>{
        expect(wrapper.find(Scale)).to.have.length(1);
    });
    it('should render ChangeList component', () =>{
        expect(wrapper.find(ChangeList)).to.have.length(1);
    });
    it('should render AddButton component', () =>{
        expect(wrapper.find(AddButton)).to.have.length(1);
    });
    it('should render GeoJSON component', () =>{
        expect(wrapper.find(GeoJSON)).to.have.length(1);
    });

    it('should change SideButtons` method prop', () => {
        let sideButtonWrapper = wrapper.find(SideButtons);

        expect(sideButtonWrapper.props().method).equal("PublicTransport");

        wrapper.instance().changeMethod("Car");
        sideButtonWrapper = wrapper.find(SideButtons);
        expect(sideButtonWrapper.props().method).equal("Car");

    });

    it('should change Header`s method prop', () => {
        let headerWrapper = wrapper.find(Header);

        expect(headerWrapper.props().method).equal("Car");

        wrapper.instance().changeMethod("PublicTransport");
        headerWrapper = wrapper.find(Header);
        expect(headerWrapper.props().method).equal("PublicTransport");

    });

    it('should change SideButtons` activeDomain prop by component method', () => {
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

describe('Header.js Unit/Integration', async() =>{

        let headerWrapper = shallow(<Header changeMethod = {wrapper.instance().changeMethod}
                                            changeDomain = {wrapper.instance().changeDomain}
                                            changeCity = {wrapper.instance().changeCity}/>);
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
    it('should change parent`s method state by clicking on `Car`', () => {
        expect(wrapper.state().method).equal("PublicTransport");
        headerWrapper.find(Button).at(0).simulate('click');
        expect(wrapper.state().method).equal("Car");
    });
    it('should change parent`s city state back to Glasgow by clicking on `Glasgow`', async() => {
        expect(wrapper.state().city).equal("Edinburgh");
        headerWrapper.find(Button).at(2).simulate('click');
        await quickUpdate();
        expect(wrapper.state().city).equal("Glasgow");
    });
    it('should change data by clicking on `Edinburgh`',async() => {
        expect(wrapper.state().geo).to.eql(glasgowData);
        headerWrapper.find(Button).at(3).simulate('click');
        await quickUpdate();
        expect(wrapper.state().geo).to.eql(edinburghData);
    });
});

describe('Import.js Unit', async() =>{
    const importWrapper = shallow(<Import/>);
    it('should render Button component', () =>{
        expect(importWrapper.find(Button)).to.have.length(2);
    });
    it('should render hidden input component', () =>{
        expect(importWrapper.find('input')).to.have.length(1);
    });

});

describe('Title.js Unit', async() =>{
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


describe('SideButtons.js Unit', async() =>{

    let sideButtonWrapper = shallow(<SideButtons activeDomains = {wrapper.state().activeDomains}
                                              method = {wrapper.state().method}
                                              changeDomain = {wrapper.instance().changeDomain}/>);

    it('should render Button components - Car', () => {
        expect(sideButtonWrapper.find(Button)).to.have.length(6);
    });
    it('should change parent`s method state', () => {
        expect(wrapper.state().domain).equal("GP");
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

describe('ChangeList.js Unit', async() =>{

    const changeWrapper = shallow(<ChangeList changes = {wrapper.state().changesList}/>);
    it('should render Control component', ()=> {
        expect(changeWrapper.find(Control)).to.have.length(1);
    });
    it('should render Accordion component', ()=> {
        expect(changeWrapper.find(Accordion)).to.have.length(1);
    });
});








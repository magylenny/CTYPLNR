//"mocha --require @babel/register --require jsdom-global/register --require ignore-styles --timeout 20000",
import {shallow} from "enzyme";
import CityMap from "./CityMap";
import React from 'react';
import sinon from 'sinon';
import "babel-polyfill";

import {Button, Grid, Icon} from "semantic-ui-react";
import { mount, render, configure} from 'enzyme';
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

let glasgowData;
let wrapper;

const getGlasgowData =function(){
    axios.get("https://api.npoint.io/f7c3649ae02eea7f5e92").then(res => {
        glasgowData = res.data;
    });
};

function setup(){
    wrapper = shallow(<CityMap/>);
    setTimeout(()=> {
        getGlasgowData();
        wrapper.update();
    }, 17000)}
beforeAll(()=>{
setup();
});
test('city database has Vienna', () => {
    console.log(wrapper.state().geo);
    console.log(glasgowData);
});
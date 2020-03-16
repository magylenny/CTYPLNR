
import React from 'react';
import GlasgowMap from "../src/GlasgowMap.js";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
global.mount = mount;
global.render = render;
global.shallow = shallow;


const {describe, it} = require('mocha');
const { assert } = require('chai');

describe('GlasgowMap', function () {
    it("app should return hello", function () {
        const wrapper = shallow(<GlasgowMap/>);
        assert.equal(wrapper.instance().componentDidMount(), "hallo")
    })
});
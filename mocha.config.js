import 'babel-polyfill';
import chai from 'chai'
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.expect = chai.expect;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});
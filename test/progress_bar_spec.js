import React from 'react';
import { shallow } from 'enzyme';
import {ProgressBar} from "../src/progress_bar";

describe('ProgressBar', function() {
    it('renders a H1 tag', function () {
        const progressBar = shallow(React.createElement(ProgressBar, {}));

        expect(progressBar.getElement().type).to.be.equal('h1')
    });
});
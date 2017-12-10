import React from 'react';
import { shallow } from 'enzyme';
import { ProgressBar } from "../src/progress_bar";

describe('ProgressBar', () => {

    describe('when rendered', () =>
    {
        let progressBar;

        beforeEach(() => {
            progressBar = shallow(React.createElement(ProgressBar, {}));
        });

        it('renders a div with "progress" as css class', () => {
            expect(progressBar.getElement().type).to.be.equal('div');
            expect(progressBar.hasClass('progress')).to.be.true;
        });

        it('renders a progress a div as child of the main container', () => {
            expect(progressBar.find('.progress-bar').length).to.be.equal(1)
        })

        it('sets a with in percentage, equal to state.percent', ()=>{
            const expectedProgress = 33;
            progressBar.setState({progress: expectedProgress});
            expect(progressBar.find('.progress-bar').props().style.width).to.be.equal(`${expectedProgress}%`)
        })
    });
});
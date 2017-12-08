import React from 'react';

class ProgressBar extends React.Component {

    constructor () {
        super();
        this.state = {progress: 0}
    }

    render () {
        const style = `width:${this.state.progress}%`;
        return (
            <div className="progress">
                <div className="progress-bar" style={style}></div>
            </div>);
    }
}

export { ProgressBar }
import React from 'react';
import styles from './style/progress_bar.css';

class ProgressBar extends React.Component {

    constructor () {
        super();
        this.state = {progress: 50}
    }

    render () {
        return (
            <div className="progress">
                <div className="progress-bar" style={{width: this.state.progress + '%'}}></div>
            </div>);
    }
}

export { ProgressBar }
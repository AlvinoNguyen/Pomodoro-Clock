import React from 'react';
import Setting from '../Setting/Setting.js';
import Clock from '../Clock/Clock.js';
import Button from '../Button/Button.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            mode: 'Session',
            seconds: 25 * 60,
            paused: true
        };
    }

    decrementTimer() {
        this.setState(state => {
            return {
                seconds: state.seconds - 1
            };
        });
    }

    pauseTimer() {
        this.setState({paused: true});
    }

    resumeTimer() {
        this.setState({paused: false});
    }

    render() {
        return (
            <div className="app-container">
                <h1>Pomodoro Clock</h1>
                <div className="settings">
                    <Setting
                        category="Break"
                        length={this.state.breakLength}
                    />
                    <Setting
                        category="Session"
                        length={this.state.sessionLength}
                    />
                </div>
                <Clock
                    mode={this.state.mode}
                    seconds={this.state.seconds}
                />
                <div className="buttons">
                    <Button
                        src="play-solid.svg"
                        activateButton={function() {}}
                    />
                    <Button
                        src="sync-solid.svg"
                        activateButton={function() {}}
                    />
                </div>
            </div>
        );
    }
}

export default App;
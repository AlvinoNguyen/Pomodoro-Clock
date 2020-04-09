import React from 'react';
import Setting from '../Setting/Setting.js';
import Clock from '../Clock/Clock.js';
import Button from '../Button/Button.js';
import './App.css';
import './colors.css';

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
        this.changeLength = this.changeLength.bind(this);
        this.changeModes = this.changeModes.bind(this);
        this.decrementTimer = this.decrementTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.resetClock = this.resetClock.bind(this);
    }

    changeLength(mode, n) {
        if(this.state.paused) {
            if(mode === 'Break' && this.state.breakLength + n >= 0 && this.state.breakLength + n <= 60) {
                this.setState(state => {
                    const breakLength = state.breakLength + n;
                    return {
                        breakLength: breakLength,
                        seconds: state.mode === 'Break' ? breakLength * 60 : state.seconds
                    };
                });
            }
            else if(mode === 'Session' && this.state.sessionLength + n >= 0 && this.state.sessionLength + n <= 60) {
                this.setState(state => {
                    const sessionLength = state.sessionLength + n;
                    return {
                        sessionLength: sessionLength,
                        seconds: state.mode === 'Session' ? sessionLength * 60 : state.seconds
                    };
                });
            }
        }
    }

    changeModes() {
        this.setState(state => {
            return {
                mode: state.mode === 'Session' ? 'Break' : 'Session',
                seconds: state.mode === 'Session' ? state.breakLength * 60 : state.sessionLength * 60
            };
        });
    }

    decrementTimer() {
        if(this.state.seconds === 0) {
            this.changeModes();
        } else {
            this.setState(state => {
                return {
                    seconds: state.seconds - 1
                };
            });
        }
    }

    pauseTimer() {
        clearInterval(this.timer);
        this.setState({paused: true});
    }

    resumeTimer() {
        this.timer = setInterval(this.decrementTimer, 1000);
        this.setState({paused: false});
    }

    resetClock() {
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            mode: 'Session',
            seconds: 25 * 60,
            paused: true
        });
        if(this.timer) clearInterval(this.timer);
    }

    render() {
        const styleClasses = this.state.mode === 'Session' ? "white-stuff red-background" : "red-stuff white-background";

        return (
            <div className={`app-container ${styleClasses}`}>
                <h1>Pomodoro Clock</h1>
                <div className="settings">
                    <Setting
                        category="Break"
                        length={this.state.breakLength}
                        paused={this.state.paused}
                        changeLength={this.changeLength}
                    />
                    <Setting
                        category="Session"
                        length={this.state.sessionLength}
                        paused={this.state.paused}
                        changeLength={this.changeLength}
                    />
                </div>
                <Clock
                    mode={this.state.mode}
                    seconds={this.state.seconds}
                />
                <div className="buttons">
                    <Button
                        src={this.state.paused ? 'play-solid.svg' : 'pause-solid.svg'}
                        alt={`${this.state.paused ? 'Resume' : 'Pause'} Timer`}
                        activateButton={this.state.paused ? this.resumeTimer : this.pauseTimer}
                    />
                    <Button
                        src="sync-solid.svg"
                        alt="Reset Timer"
                        activateButton={this.resetClock}
                    />
                </div>
            </div>
        );
    }
}

export default App;
import React from 'react';
import './Clock.css';

function Clock(props) {
    let formatToMinutes = seconds => {
        let min = ('0' + Math.floor(seconds / 60)).slice(-2);
        let sec = ('0' + (seconds % 60)).slice(-2);
        return `${min}:${sec}`;
    };
    return (
        <div className="clock">
            <div className="mode">{props.mode}</div>
            <div className="time">{formatToMinutes(props.seconds)}</div>
        </div>
    );
}

export default Clock;
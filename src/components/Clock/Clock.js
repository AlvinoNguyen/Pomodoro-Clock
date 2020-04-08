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
            <div>{props.mode}</div>
            <div>{formatToMinutes(props.seconds)}</div>
        </div>
    );
}

export default Clock;
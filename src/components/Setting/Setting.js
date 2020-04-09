import React from 'react';
import './Setting.css';

function Setting(props) {
    const pausedStyles = {
        cursor: props.paused ? 'pointer' : 'default',
        opacity: props.paused ? '100%' : '0%'
    }; 
    return (
        <div className="setting">
            <div>{props.category} Length</div>
            <div className="dials">
                <img
                    src="arrow-up-solid.svg"
                    alt={`Increase ${props.category}`}
                    onClick={() => props.changeLength(props.category, 1)}
                    style={pausedStyles}
                />
                <div>{props.length}</div>
                <img
                    src="arrow-down-solid.svg"
                    alt={`Decrease ${props.category}`}
                    onClick={() => props.changeLength(props.category, -1)}
                    style={pausedStyles}
                />
            </div>
        </div>
    );
}

export default Setting;
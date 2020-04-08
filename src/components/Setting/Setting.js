import React from 'react';
import './Setting.css';

function Setting(props) {
    return (
        <div className="setting">
            <div>{props.category} Length</div>
            <div>
                <img
                    src="arrow-up-solid.svg"
                    alt={`Increase ${props.category}`}
                    width="16px"
                />
                <div>{props.length}</div>
                <img
                    src="arrow-down-solid.svg"
                    alt={`Decrease ${props.category}`}
                    width="16px"
                />
            </div>
        </div>
    );
}

export default Setting;
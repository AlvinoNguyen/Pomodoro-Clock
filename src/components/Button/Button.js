import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
            onClick={props.activateButton}
        />
    );
}

export default Button;
import React from 'react';
import './Button.css';

function Button(props) {
    return <img src={props.src} onClick={props.activateButton} width="16px"/>;
}

export default Button;
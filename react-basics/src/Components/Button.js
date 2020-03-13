import React from 'react';

const Button = ({text, onClick, index=null}) => {
    return <button type="button" data-index={index} onClick={onClick}>{text}</button>
}

export default Button;
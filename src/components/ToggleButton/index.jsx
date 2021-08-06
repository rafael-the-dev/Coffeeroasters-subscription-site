import React, { useRef } from 'react';
import './styles.css'

const ToggleButton = React.forwardRef(({ text }, ref ) => {
    const innerButtonRef = useRef(null);
    const reference = ref ? ref : innerButtonRef;

    const clickHandler = event => {
        reference.current.classList.toggle('toggle-button--opened');
    };

    return (
        <button
            ref={reference }
            onClick={clickHandler} 
            className="font-weight-9 font-fraunces w-100 d-flex align-items-center justify-content-between 
            bg-transparent border-0 toggle-button toggle-button--opened">
            <span className="text-start toggle-button__text">{ text }</span>
            <span className="bg-center bg-contain bg-no-repeat toggle-button__arrow"></span>
        </button>
    );
});

export default ToggleButton;
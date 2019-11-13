import React from 'react';

const InputText = (props) => {
    return(
        <fieldset className={'input-tel-component ' + props.class}>
            {/* Label */}
            <label className={'input-tel-component__label'}> {props.label} </label>
            {/* Value */}
            <input
                className={'input-tel-component__value'}
                type={'text'}
                name={props.name}
                placeholder={props.placeholder}
                autoComplete={'false'}
            />
            {/* Error */}
            <p className={'input-tel-component__error ' + (props.error ? '' : '_hide')}>{props.error}</p>
        </fieldset>
    );
}

export default InputText;
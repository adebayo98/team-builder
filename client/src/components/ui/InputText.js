import React from 'react';

const InputText = (props) => {
    return(
        <fieldset className={'input-text-component ' + props.class}>
            {/* Label */}
            <label className={'input-text-component__label'}> {props.label} </label>
            {/* Value */}
            <input
                className={'input-text-component__value'}
                type={'text'}
                name={props.name}
                placeholder={props.placeholder}
                autoComplete={'false'}
            />
            {/* Error */}
            <p className={'input-text-component__error ' + (props.error ? '' : '_hide')}>{props.error}</p>
        </fieldset>
    );
}

export default InputText;
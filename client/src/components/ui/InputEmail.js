import React from 'react';

const InputEmail = (props) => {
    return(
        <fieldset className={'input-email-component'}>
            {/* Label */}
            <label className={'input-email-component__label'}> {props.label} </label>
            {/* Value */}
            <input
                className={'input-email-component__value'}
                type={'text'}
                name={props.name}
                value={props.value != null ? props.value : ''}
                placeholder={props.placeholder ? props.placeholder : 'email@gmail.com'}
            />
            {/* Error */}
            <p className={'input-email-component__error ' + (props.error ? '' : '_hide')}>{props.error}</p>
        </fieldset>
    );
}

export default InputEmail;
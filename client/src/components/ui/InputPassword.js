import React from 'react';

const InputPassword = (props) => {

    return(
        <fieldset className={'input-password-component ' + props.class}>
            {/* Label */}
            <label className={'input-password-component__label'}> {props.label} </label>
            {/* Value wrapper */}
            <div className={'input-password-component__value-wrapper'}>
                {/* Value */}
                <input
                    className={'input-password-component__value'}
                    type={'password'}
                    placeholder={props.placeholder ? props.placeholder : '**********'}
                    onChange={(event) => props.onPasswordChange(event.target.value)}
                />
            </div>
            {/* Error */}
            <p className={'input-password-component__error ' + (props.error ? '' : '_hide')}>{props.error}</p>
        </fieldset>
    );
}

export default InputPassword;
import React from 'react';

const InputText = (props) => {
    return (
        <fieldset>
            <label className={'label-input-text'}>{props.label}</label>
            <input
                className={'input-text-component'}
                type={'text'}
                placeholder={props.placeholder ? props.placeholder : 'input'}
                name={props.search ? props.search : 'text'}
                readOnly={props.readOnly ? props.readOnly : false}
            />
        </fieldset>
    );
}

export default InputText;
import React from 'react';

const TextArea = (props) => {
    return (
        <fieldset>
            <label className={'label-input-text'}>{props.label}</label>
            <textarea
                className={'textarea-component'}
                placeholder={props.placeholder ? props.placeholder : 'textarea'}
                name={props.search ? props.search : 'text'}
                readOnly={props.readOnly ? props.readOnly : false}
            />
        </fieldset>
    );
}

export default TextArea;
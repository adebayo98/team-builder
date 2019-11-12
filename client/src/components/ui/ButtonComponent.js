import React from 'react';

const ButtonComponent = (props) => {

    return(
        <button className={'button-component '+ (props.buttonSecond ? 'second' : '')} type={'submit'}>{props.label}</button>
    );

}

export default ButtonComponent;
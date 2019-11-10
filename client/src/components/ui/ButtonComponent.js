import React from 'react';

const ButtonComponent = (props) => {

    return(
        <button className={'button-component'} type={'submit'}>{props.label}</button>
    );

}

export default ButtonComponent;
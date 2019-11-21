import React from 'react';
import Header from "../components/Header";

const Default = (props) => {
    return(
        <div className={'default-layout'}>
            <Header/>
            {props.content}
        </div>
    );
}

export default Default;
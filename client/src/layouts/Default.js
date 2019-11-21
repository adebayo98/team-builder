import React from 'react';
import Header from "../components/Header";

const Default = (props) => {
    return(
        <div className={'default-layout'}>
            <Header/>
            <div className={'main-content'}>
                {props.content}
            </div>
        </div>
    );
}

export default Default;
import React from 'react';

/* COMPONENTS */

import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

const HomeView = () => {
    return(
        <div className={'home-view'}>
            <HeaderTop />
            <HeaderBottom 
                title='Team builder'
            />
        </div>
    );
}

export default HomeView;
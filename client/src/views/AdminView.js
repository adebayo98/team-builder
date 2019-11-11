import React from 'react';

/* COMPONENTS */

import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

const AdminView = () => {
    return(
        <div className={'admin-view'}>
            <HeaderTop />
            <HeaderBottom 
                title='Team builder'
            />
        </div>
    );
}

export default AdminView;
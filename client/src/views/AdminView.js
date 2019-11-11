import React from 'react';

/* COMPONENTS */
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

import ProfileCard from '../components/ProfileCard';

const AdminView = () => {
    return(
        <div className={'admin-view'}>
            <HeaderTop />
            <HeaderBottom 
                title='Team builder'
            />
            <section className={'admin-content container-fluid'}>
                <ProfileCard />
            </section>
        </div>
    );
}

export default AdminView;
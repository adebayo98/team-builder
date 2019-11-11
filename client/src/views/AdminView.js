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
                <ProfileCard 
                    class="web3" 
                    img =""
                    name="Dimitri"
                    job="Dév"
                />
            </section>
        </div>
    );
}

export default AdminView;
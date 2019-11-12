import React from 'react';

/* COMPONENTS */
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

import ProfileCard from '../components/ProfileCard';

const AdminView = () => {
    return(
        <div className={'admin-view'}>
            <section className={'admin-header'}>
                <HeaderTop />
                <HeaderBottom 
                    title='Team builder'
                    menu='yes'
                />
            </section>
            <section className={'admin-content container-fluid'}>
                <p className={'admin-content__number'}>3 utilisateurs</p>
                <div className={'admin-content__cards d-f'}>
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                    <ProfileCard 
                        class="web3" 
                        img =""
                        name="Dimitri"
                        job="Dév"
                    />
                </div>
            </section>
        </div>
    );
}

export default AdminView;
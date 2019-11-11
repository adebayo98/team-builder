import React from 'react';

/* COMPONENTS */

import ProfileCard from '../components/ProfileCard';
import InputEmail from '../components/ui/InputEmail';
import InputPassword from '../components/ui/InputPassword';
import ButtonComponent from '../components/ui/ButtonComponent';

const HomeView = () => {
    return(
        <div className={'home-view d-f'}>
            <div className={'home-left d-f'}>
                <ProfileCard 
                    img =""
                    name="Dimitri"
                    job="Dév"
                />
                <ProfileCard />
                <ProfileCard />
            </div>
            <div className={'home-right'}>
                <img className={'home-right__logo'} src={'/images/logo-3-blanc.svg'} alt={'Logo Hetic'} />
                <h2>Connexion</h2>
                <InputEmail />
                <InputPassword />
                <ButtonComponent
                    label="Connexion"
                />
                <a href="">Impossible de se connecter</a>
                <ButtonComponent
                    buttonSecond="Yes"
                    label="Inscription"
                />
            </div>
        </div>
    );
}

export default HomeView;
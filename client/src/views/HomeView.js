import React from 'react';

/* COMPONENTS */

import ProfileCard from '../components/ProfileCard';
import InputEmail from '../components/ui/InputEmail';
import InputPassword from '../components/ui/InputPassword';
import ButtonComponent from '../components/ui/ButtonComponent';

const HomeView = () => {
    return(
        <div className={'home-view d-f'}>
            <div className={'home-left container-fluid d-f'}>
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
            <div className={'home-right container-fluid d-f'}>
                <img className={'home-right__logo'} src={'/images/logo-3-blanc.svg'} alt={'Logo Hetic'} />
                <h2 className={'home-right__title'}>Connexion</h2>
                <form className={'home-right__form d-f'}>
                    <InputEmail 
                        label="Email*"
                    />
                    <InputPassword 
                        label="Mot de passe*"
                    />
                    <ButtonComponent
                        label="Connexion"
                    />
                    <a href="" className={'home-right__problem'}>Impossible de se connecter</a>
                    <ButtonComponent
                        buttonSecond="Yes"
                        label="Inscription"
                    />
                </form>
            </div>
        </div>
    );
}

export default HomeView;
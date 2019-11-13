import React, {Component} from 'react';

/* COMPONENTS */

import InputEmail from '../components/ui/InputEmail';
import InputTel from '../components/ui/InputTel';
import InputText from '../components/ui/InputText';
import ButtonComponent from '../components/ui/ButtonComponent';
import SmallButton from '../components/ui/SmallButton';

class SignInView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'sign-in-view d-f'}>
                <div className={'sign-header d-f'}>
                    <SmallButton 
                        return="return"
                    />
                    <h2 className={'sign-header__title'}>Informations personnels</h2>
                </div>
                <form className={'sign-form'}>
                    <InputText 
                        label="Nom*"
                        placeholder="Mon nom"
                    />
                    <InputText 
                        label="Prénom*"
                        placeholder="Mon prénom"
                    />
                    <InputEmail 
                        label="Email hetic*"
                        placeholder="email@hetic.com"
                    />
                    <InputEmail 
                        label="Email personnel"
                        placeholder=""
                    />
                    <InputTel 
                        label="Numéro de téléphone*"
                        placeholder="Numéro téléphone"
                    />
                    <ButtonComponent 
                        label="Continuer"
                    />
                </form>
            </div>
        );
    }

}

export default SignInView;
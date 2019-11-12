import React, {Component} from 'react';

import InputText from '../components/ui/InputText';
import ProfileHeader from './ProfileHeader';

class HeaderTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'header-top d-f container-fluid'}>
                <a className={'header-top__logo'} href={'/'}>
                    <img src={'/images/logo-3-blanc.svg'} alt={'Logo Hetic'} />
                </a>
                <InputText 
                    placeholder='Rechercher un utilisateur'
                />
                <ProfileHeader />
            </div>
        );
    }

}

export default HeaderTop;
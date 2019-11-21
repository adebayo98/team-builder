import React from 'react';
import InputSearch from "./ui/InputSearch";
import SessionHelper from "../helpers/SessionHelper";
import RolesTranslator from "../helpers/RolesTranslator";

const serverHost = 'http://hetic.adebayo.fr';

const Header = () => {

    const user = SessionHelper.userData();

    console.log(user);

    return(
        <header className={'header'}>
            {/* header top area */}
            <div className={'container-dft header-content'}>
                <div className={'header-content-left-area'}>
                    {/* logo */}
                    <img className={'logo'} src={'/images/logo-3-blanc.svg'} alt={'logo hetic'}/>
                    {/* Search bar */}
                    <InputSearch/>
                </div>

                <div className={'header-content-right-area'}>
                   {/* user data */}
                   <div className={'user-data'}>
                       <span className={'user-data-fullname'}> {user.last_name} </span>
                       <span className={'user-data-role'}> {RolesTranslator(user.role)} </span>
                   </div>
                   {/* photo container */}
                   <div className={'photo-container'} style={{backgroundImage: `url(${serverHost+user.photo_url})`}}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
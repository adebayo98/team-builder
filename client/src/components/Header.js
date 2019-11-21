import React from 'react';
import InputSearch from "./ui/InputSearch";
import SessionHelper from "../helpers/SessionHelper";

const Header = () => {

    return(
        <header className={'header'}>
            {/* header top area */}
            <div className={'container-dft header-top-area'}>
                <div className={'header-top-area-left-area'}>
                    {/* logo */}
                    <img className={'logo'} src={'/images/logo-3-blanc.svg'} alt={'logo hetic'}/>
                    {/* Search bar */}
                    <InputSearch/>
                </div>

                <div className={'header-top-area-right-area'}>
                   {/* user data */}
                   <div className={'user-data'}>
                       {/* user data */}
                       <div className={'user-data'}>
                           <span className={'user-data-fullname'}> test </span>

                       </div>
                       {/* photo */}
                       <img className={'photo'} src={''} alt={''}/>
                   </div>
                </div>
            </div>
            {/* header bottom area */}
            <div className={'container-dft header-bottom-area'}>

            </div>
        </header>
    );
}

export default Header;
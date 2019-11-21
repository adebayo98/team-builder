import React from 'react';
import InputSearch from "./ui/InputSearch";

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
            </div>
            {/* header bottom area */}
            <div className={'container-dft header-bottom-area'}>

            </div>
        </header>
    );
}

export default Header;
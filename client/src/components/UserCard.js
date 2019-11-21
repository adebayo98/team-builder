import React from 'react';

const serverHost = 'http://hetic.adebayo.fr';

const UserCard = (props) => {

    const fullNameRender = (fullName) => {
        if (fullName.length > 13){
            return fullName.slice(0, 13)+'...';
        }
        return fullName;
    }

    return(
        <div className={'user-card-component user-card-component--'+props.itemInPage}>
            {/* photo container */}
            <div className={'photo-container'} style={{backgroundImage: `url(${serverHost+props.photoUrl})`}}></div>
            {/* full name */}
            <p className={'full-name'}>{fullNameRender(props.fullName)}</p>
            {/* main skill */}
            <p className={'main-skill'}>{props.mainSkill}</p>
        </div>
    );
}

export default UserCard;
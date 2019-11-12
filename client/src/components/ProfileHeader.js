import React, {Component} from 'react';

import ProfilePic from '../assets/img/profile-pic.jpg';
import ArrowDown from '../assets/img/icons/Arrow down.svg';

class ProfileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'profile-header d-f'}>
                <div className={'profile-header__user d-f'}>
                    <p className={'user-fullname'}>Nathan Colin</p>
                    <p className={'user-role'}>Admin</p>
                </div>
                <div className={'profile-header__img'} style={{backgroundImage: `url(${ProfilePic}`}}></div>
                <img src={ArrowDown} alt="" className={'profile-header__arrow'}></img>
            </div>
        );
    }

}

export default ProfileHeader;
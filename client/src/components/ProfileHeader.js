import React, {Component} from 'react';

import ArrowDown from '../assets/img/icons/Arrow down.svg';

/* HELPERS */
import SessionHelpers from '../helpers/SessionHelper';

class ProfileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: [],
        };
    }

    async componentDidMount() {
        this.setState({
            currentUser: SessionHelpers.userData()
        });
    }

    render() {

        return(
            <div className={'profile-header d-f'}>
                <div className={'profile-header__user d-f'}>
                    <p className={'user-fullname'}>{this.state.currentUser.last_name} {this.state.currentUser.first_name}</p>
                    <p className={'user-role'}>{this.state.currentUser.role}</p>
                </div>
                <div className={'profile-header__img'} style={{backgroundImage: `url(${'http://hetic.adebayo.fr' + this.state.currentUser.photo_url}`}}></div>
                <img src={ArrowDown} alt="" className={'profile-header__arrow'}></img>
            </div>
        );
    }

}

export default ProfileHeader;
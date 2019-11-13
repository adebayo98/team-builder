import React, {Component} from 'react';

import ProfilePic from '../assets/img/profile-pic.jpg';

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            // <a href={this.props.id}>
                <div className={'profile-card d-f col-xs-2'}>
                    <p className={'profile-card__class'}>{this.props.class}</p>
                    <div className={'profile-card__img'} style={{backgroundImage: `url(${ProfilePic}`}}></div> 
                    <p className={'profile-card__name'}>{this.props.name}</p>
                    <p className={'profile-card__job'}>{this.props.job}</p>
                    {/* <Route path="/profile?=" {...this.props.id}></Route> */}
                </div>
            // </a>
        );
    }

}

export default ProfileCard;
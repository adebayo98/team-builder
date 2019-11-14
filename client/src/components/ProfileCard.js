import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';

import ProfilePic from '../assets/img/profile-pic.jpg';

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <Link to={`/profile?id=${this.props.id}`} className="profile-card d-f">
                <p className={'profile-card__class'}>{this.props.class}</p>
                <div className={'profile-card__img'} style={{backgroundImage: `url(${ProfilePic}`}}></div> 
                <p className={'profile-card__name'}>{this.props.name}</p>
                <p className={'profile-card__job'}>{this.props.job}</p>
            </Link>
        );
    }

}

export default ProfileCard;
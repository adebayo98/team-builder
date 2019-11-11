import React, {Component} from 'react';

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'profile-card'}>
                <p className={'profile-card__class'}>{this.props.class}</p>
                <img src={this.props.img} alt={this.props.name} className={'profile-card__img'}></img>
                <p className={'profile-card__name'}>{this.props.name}</p>
                <p className={'profile-card__job'}>{this.props.job}</p>
            </div>
        );
    }

}

export default ProfileCard;
import React from 'react';

/* COMPONENTS */

import ProfileCard from '../components/ProfileCard';
import InputEmail from '../components/ui/InputEmail';
import InputPassword from '../components/ui/InputPassword';
import ButtonComponent from '../components/ui/ButtonComponent';

class HomeView extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            cards: []
        }
    }

    async componentDidMount(){
        const response = await fetch(`http://hetic.adebayo.fr//api/users/random/3`);
        const cards = await response.json();

        console.log(cards)

        this.setState({
            cards: cards.result.users
        })
    }

    render(){
        return(
            <div className={'home-view d-f'}>
            <div className={'home-left container-fluid d-f'}>
                {this.state.cards.map( item => {
                    return(
                        <ProfileCard
                            id= {item.id}
                            class= {item.formation} 
                            img =""
                            name= {item.first_name + ' ' + item.last_name}
                            job= {item.role}
                        />
                    )
                })}
            </div>
            <div className={'home-right container-fluid d-f'}>
                <img className={'home-right__logo'} src={'/images/logo-3-blanc.svg'} alt={'Logo Hetic'} />
                <h2 className={'home-right__title'}>Connexion</h2>
                <form className={'home-right__form d-f'}>
                    <InputEmail 
                        label="Email*"
                    />
                    <InputPassword 
                        label="Mot de passe*"
                    />
                    <ButtonComponent
                        label="Connexion"
                    />
                    <a href="" className={'home-right__problem'}>Impossible de se connecter</a>
                    <ButtonComponent
                        buttonSecond="true"
                        label="Inscription"
                    />
                </form>
            </div>
        </div>
        );
    }
}

export default HomeView;
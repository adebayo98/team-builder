import React from 'react';
import querystring from 'query-string'

/* COMPONENTS */

import ProfileCard from '../components/ProfileCard';
import InputEmail from '../components/ui/InputEmail';
import InputPassword from '../components/ui/InputPassword';
import ButtonComponent from '../components/ui/ButtonComponent';

class HomeView extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            cards: [],
            email: null,
            password: null,
            error: {},
        }
    }

    async componentDidMount(){
        const response = await fetch(`http://hetic.adebayo.fr/api/users/random/3`);
        const cards = await response.json();
        this.setState({cards: cards.result.users})
    }

    getCredentials = (event) => {
        event.preventDefault();
        fetch('http://hetic.adebayo.fr/api/user/credentials', {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
            method: 'POST',
            body: querystring.stringify(this.state)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.error){
                this.setState({error: data.error})
            }
            // hountondji.adebayo@hetic.net
            if(data.status === "success"){
                const token = data.result.token.split('.');
                const payload = atob(token[1]);
                localStorage.setItem('userData', payload);
                let role = JSON.parse(localStorage.getItem('userData')).role;
                let idStudent = JSON.parse(localStorage.getItem('userData')).uid;

                if(role !== 'student'){
                    window.location.href = '/';
                } else {
                    window.location.href= '/profile?id='+idStudent;
                }
            }
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
                            formation={item.formation}
                            img={item.photo_url}
                            name={item.first_name + ' ' + item.last_name}
                            job={item.role}
                        />
                    )
                })}
            </div>
            <div className={'home-right container-fluid d-f'}>
                <img className={'home-right__logo'} src={'/images/logo-3-blanc.svg'} alt={'Logo Hetic'} />
                <h2 className={'home-right__title'}>Connexion</h2>
                <form className={'home-right__form d-f'} onSubmit={(event) => this.getCredentials(event)}>
                    <p className=''>{this.state.error.global}</p>
                    <InputEmail 
                        label="Email*"
                        onEmailChange={(email) => this.setState({email})}
                    />
                    <InputPassword 
                        label="Mot de passe*"
                        onPasswordChange={(password) => this.setState({password})}
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
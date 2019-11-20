import React, {Component} from 'react';
import Api from "../services/Api";
import UserCard from "../components/UserCard";
import Title1 from "../components/ui/Title1";

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {},
            randomUsers: [],
        };
    }

    async componentDidMount() {
        this.setState({randomUsers: await Api.getRandomUsers(3)})
    }

    render() {

        const users = this.state.randomUsers.map((user, key) =>
            <UserCard
                key={key}
                itemInPage={key}
                id={user.id}
                formation={user.formation}
                photoUrl={user.photo_url}
                fullName={user.first_name + ' ' + user.last_name}
                mainSkill={user.main_skill}
            />
        );

        return(
            <section className={'login-page'}>
                <aside className={'random-users'}>{users}</aside>
                <form className={'login-form'}>
                    <div className={'content-wrapper'}>
                        <img className={'logo'} src={'/images/logo-3-blanc.svg'} alt={'logo hetic'}/>
                        <Title1 value={'Connexion'}/>
                        <div className={'field-group field-group--mail'}>
                            <label>Email*</label>
                            <input type={'email'} name={'email'} placeholder={'firstname.lastname@hetic.net'}
                                   onChange={(event) => this.setState({email: event.target.value})}/>
                        </div>
                        <div className={'field-group field-group--pass'}>
                            <label>Mot de passe*</label>
                            <input type={'password'} name={'password'} placeholder={'**********'}
                                   onChange={(event => this.setState({password: event.target.value}))}/>
                        </div>
                        <button className={'cta--submit'} type={'submit'}>Connexion</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;
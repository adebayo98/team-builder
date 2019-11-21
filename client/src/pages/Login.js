import React, {Component} from 'react';
import Api from "../services/Api";
import UserCard from "../components/UserCard";
import Title1 from "../components/ui/Title1";
import SessionHelper from "../helpers/SessionHelper";

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            error: {},
            randomUsers: [],
        };
    }

    async componentDidMount() {
        this.setState({randomUsers: await Api.getRandomUsers(3)})
    }

    async loginFormValidator(event) {
        event.preventDefault();
        // Validate form data
        let validationResult = await  Api.getCredentials(this.state.email, this.state.password);
        // If log has failed
        if (validationResult.status === 'failure' && validationResult.code === 2 && validationResult.error){
            this.setState({error: validationResult.error});
        }
        // If log is successful
        if (validationResult.status === 'success' && validationResult.result){
            return SessionHelper.build(validationResult.result.token)
        }
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
                {/* random user */}
                <aside className={'random-users'}>{users}</aside>
                {/* login form */}
                <form className={'login-form'} onSubmit={(event => this.loginFormValidator(event))}>
                    <div className={'content-wrapper'}>
                        <img className={'logo'} src={'/images/logo-3-blanc.svg'} alt={'logo hetic'}/>
                        <Title1 value={'Connexion'}/>
                        { this.state.error.global ? <p className={'form-error form-error--global'}> {this.state.error.global} </p> : '' }
                        <div className={'field-group field-group--mail'}>
                            <label>Email*</label>
                            <input type={'email'} name={'email'} placeholder={'firstname.lastname@hetic.net'}
                                   onChange={(event) => this.setState({email: event.target.value})}/>
                            { this.state.error.email ? <p className={'form-error'}> {this.state.error.email} </p> : '' }
                        </div>
                        <div className={'field-group field-group--pass'}>
                            <label>Mot de passe*</label>
                            <input type={'password'} name={'password'} placeholder={'**********'}
                                   onChange={(event => this.setState({password: event.target.value}))}/>
                            { this.state.error.password ? <p className={'form-error'}> {this.state.error.password} </p> : '' }
                        </div>
                        <button className={'cta--submit'} type={'submit'}>Connexion</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;
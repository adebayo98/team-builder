import React, {Component} from 'react';
import Api from "../services/Api";
import UserCard from "../components/UserCard";

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
            // login page
            <section className={'login-page'}>
                {/* random-users */}
                <aside className={'random-users'}>{users}</aside>
                {/* login form */}
                <form className={'login-form'}>

                </form>
            </section>
        )
    }
}

export default Login;
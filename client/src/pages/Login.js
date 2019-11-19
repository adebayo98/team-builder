import React, {Component} from 'react';

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {}
        };
    }

    render() {
        return(
            // login page
            <section className={'login-page'}>
                {/* random-users */}
                <aside className={'random-users'}>

                </aside>
                {/* login form */}
                <form className={'login-form'}>

                </form>
            </section>
        )
    }
}

export default Login;
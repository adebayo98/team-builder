import React, {Component} from 'react';

/* COMPONENTS */

import InputSelect from '../components/ui/InputSelect';
import ButtonComponent from '../components/ui/ButtonComponent';
import SmallButton from '../components/ui/SmallButton';

class SignInView2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {'label': 'xxx', 'value': 'xxx'},
                {'label': 'xxx','value': 'xxx'},
            ],
            promotions: [
                {'label': 'xxx', 'value': 'xxx'},
                {'label': 'xxx', 'value': 'xxx'},
            ],
            job: null,
            promotion: null,
        };
    }

    render() {

        return(
            <div className={'sign-in-view2 d-f'}>
                <div className={'sign-header d-f'}>
                    <SmallButton 
                        return="return"
                    />
                    <h2 className={'sign-header__title'}>Informations personnels</h2>
                </div>
                <form className={'sign-form'}>
                    <InputSelect 
                        label='Metier*'
                        options={this.state.jobs}
                        onSelectChange={(job) => this.setState({job})}
                    />
                    <InputSelect 
                        label='Promotion*'
                        options={this.state.promotions}
                        onSelectChange={(promotion) => this.setState({promotion})}
                    />
                    <ButtonComponent 
                        label="finaliser"
                    />
                </form>
            </div>
        );
    }

}

export default SignInView2;
import React from 'react';
import SessionHelper from "../helpers/SessionHelper";
import PageHead from "../components/PageHead";
import InputText from "../components/ui/InputText";
import SkillCard from "../components/SkillCard";

const serverHost = 'http://hetic.adebayo.fr';

class SingleUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onEdit: false,
        };
    }

    onEdit = () => {
        this.setState({onEdit: !this.state.onEdit})
    }

    saveEdit = () => {
        this.setState({ onEdit: !this.state.onEdit})
    }

    render() {
        const user = SessionHelper.userData();

        return(
            <main className = {'single-user-page'}>
            {/* Header */ }
            <PageHead title = {'My profile'}/>

                {/* Content */}
                <section>
                    <h2>{user.first_name} {user.last_name}</h2>

                    {/* {this.state.onEdit ? <SkillCard onEdit={this.state.onEdit} /> : ''}
                    <SkillCard />
                    <InputText /> */}

                    {/* Personal informations */ }
                    <div></div >

                    {/* Skills */ }
                    <div></div>
                </section>
            </main >
        );
    }
}

export default SingleUser;
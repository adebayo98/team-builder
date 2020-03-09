import React from 'react';
import SessionHelper from "../helpers/SessionHelper";
import PageHead from "../components/PageHead";
import InputText from "../components/ui/InputText";
import Textarea from "../components/ui/Textarea";
import SkillCard from "../components/SkillCard";
import ImageCard from "../components/ImageCard";

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
                <form className="user">

                    {/* User name */}
                    <h2 className={'user-name'}>{user.first_name} {user.last_name}</h2>

                    {/* USer informations */ }
                    <div className={'user-informations'}>
                        <h3>Personal informations</h3>
                        <ImageCard />
                        <div>
                            <InputText />
                            <InputText />
                        </div>
                        <div>
                            <InputText />
                            <InputText />
                        </div>
                        <Textarea />
                    </div >

                    {/* User skills */ }
                    <div className={'user-skills'}>
                        <h3>Competences</h3>
                        <div className={'skills'}>
                            {this.state.onEdit ? <SkillCard onEdit={this.state.onEdit} /> : ''}
                            <SkillCard />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={"user-cta"}>
                        <button className={'cta--submit'} type={'submit'}>Connexion</button>
                    </div>
                </form>
            </main >
        );
    }
}

export default SingleUser;
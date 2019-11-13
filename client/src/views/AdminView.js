import React from 'react';

/* COMPONENTS */
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

import ProfileCard from '../components/ProfileCard';

class AdminView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            createGroup: false,
        }
        this.createGroup = this.createGroup.bind(this);
    }

    createGroup(){
        console.log(this);

        this.setState({
            createGroup: !this.state.createGroup
        })
    }

    render(){
        return(
            <div className={'admin-view'}>
                <section className={'admin-header'}>
                    <HeaderTop 
                        functionButton={this.createGroup}
                    />
                    <HeaderBottom 
                        title='Team builder'
                        menu='yes'
                    />
                </section>
                { this.state.createGroup ?
                    <div>
                        <div className="overlay"></div>
                        <div className="competences-popup">
                            <div className="title-md">Ajouter une compétence</div>
                            <form className="create-competence mt-md" onSubmit={this.createCompetence}>
                                <label className="label title-xs">Nom de la compétence</label>
                                <input
                                    type="text"
                                    className="input-custom-competence"
                                    name="name"
                                    value={this.props.searchString}
                                    onChange={this.handleChange}
                                />
                                <label className="label title-xs">Type</label>
                                <select className="select-custom-competence" name="type" id="">
                                    <option value="design">Design</option>
                                    <option value="dev">Dev</option>
                                    <option value="method">Method</option>
                                </select>

                                <div className="d-f mt-md">
                                    <button className="close btn btn-empty" onClick={this.createGroup}>Annuler</button>
                                    <button type="submit" className="create-competence-btn btn btn-green">Créer</button>
                                </div>

                            </form>
                        </div>
                    </div>
                : null
                }
                <section className={'admin-content container-fluid'}>
                    <p className={'admin-content__number'}>3 utilisateurs</p>
                    <div className={'admin-content__cards d-f'}>
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                        <ProfileCard 
                            class="web3" 
                            img =""
                            name="Dimitri"
                            job="Dév"
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default AdminView;
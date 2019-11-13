import React from 'react';

/* COMPONENTS */
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

import ProfileCard from '../components/ProfileCard';

class AdminView extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoading: true,
            data: "",
            createGroup: false,
        };
        this.createGroup = this.createGroup.bind(this);

    }

    async componentDidMount() {
        const response = await fetch(`http://hetic.adebayo.fr/api/users`);
        const json = await response.json();
        this.setState({ 
            data : json,
            isLoading: false
        });
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
                { this.state.isLoading ? 
                <div className="ta-c">Loading students</div>
                : 
                <div>
                    <p className={'admin-content__number'}>{this.state.data.result.total} utilisateurs</p>
                    <div className={'admin-content__cards d-f jc-around'}>
                    
                        {this.state.data.result.users.map( item => {
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
                </div>
                
                }
                
            </section>
        </div>
        );
    }
}

export default AdminView;
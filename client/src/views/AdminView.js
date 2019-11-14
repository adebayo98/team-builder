import React from 'react';

/* COMPONENTS */
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';
import ProfileCard from '../components/ProfileCard';
import FilterComponent from '../components/FilterComponent';

class AdminView extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoading: true,
            data: "",

            filterF: null,
            filterS: null,

            createGroup: false,
            aside: false,
        };
        this.createGroup = this.createGroup.bind(this);
        this.openFilter = this.openFilter.bind(this);

    }

    async componentDidMount() {
        Promise.all([
            fetch('http://hetic.adebayo.fr/api/users'),
        ])
        .then(([res1]) => Promise.all([res1.json()]))
        .then(([data1]) => this.setState({
            isLoading: false,
            data: data1.result,
        }));
    }


    createGroup(){
        this.setState({
            createGroup: !this.state.createGroup
        })
    }

    openFilter(){
        this.setState({
            aside: !this.state.aside
        })
        
        document.getElementById('buttonFilter').classList.toggle('active');
        document.getElementById('adminAside').classList.toggle('open');
        document.getElementById('adminContent').classList.toggle('open');
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
                    functionSmallButton={this.openFilter}
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
            <aside id={'adminAside'} className={'admin-aside'}>
                <FilterComponent 
                    titlePromotions='Promotions'
                    titleCompetences='Compétences'
                />
            </aside>

            <section id={'adminContent'} className={'admin-content container-fluid'}>
                { this.state.isLoading ? 
                <div className="ta-c">Loading students</div>
                : 
                <div>
                    <p className={'admin-content__number'}>{this.state.data.total} utilisateurs</p>
                    <div className={'admin-content__cards d-f jc-around'}>
                    
                        {this.state.data.users.map( item => {
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
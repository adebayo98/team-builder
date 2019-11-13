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
            data: ""
        };
    }

    async componentDidMount() {
        const response = await fetch(`http://hetic.adebayo.fr/api/users`);
        const json = await response.json();
        this.setState({ 
            data : json,
            isLoading: false
        });
    }
    

    render(){
        return(
            <div className={'admin-view'}>
            <section className={'admin-header'}>
                <HeaderTop />
                <HeaderBottom 
                    title='Team builder'
                />
            </section>
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
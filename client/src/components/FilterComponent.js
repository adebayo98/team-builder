import React, {Component} from 'react';

/* COMPONENTS */
import InputCheckbox from './ui/InputCheckbox';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            formations:[],
            skills: "",
        };
    }

    async componentDidMount() {
        Promise.all([
            fetch('http://hetic.adebayo.fr/api/formations'),
            fetch('http://hetic.adebayo.fr/api/skills')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            isLoading: false,
            formations: data1.result,
            skills: data2.result
        }));
    }

    render() {

        return(
            <div className={'filter-component d-f container-fluid'}>
                <h2 className={'filter-component__title'}>Flitre</h2>
                {this.state.isLoading ? 
                    <div className="ta-c">Loading students</div>
                :
                    <div>
                        <div className={'filter-promotions'}>
                            <h3 className={'filter-promotions__title'}>{this.props.titlePromotions}</h3>
                            {this.state.formations.users.map( item => {
                                return(
                                    <InputCheckbox 
                                        label = {item.code}
                                    />
                                )
                            })}
                        </div>
                        <div className={'filter-competences'}>
                            <h3 className={'filter-competences__title'}>{this.props.titleCompetences}</h3>
                            {this.state.skills.users.map( item => {
                                return(
                                    <InputCheckbox 
                                        label = {item.name}
                                    />
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        );
    }

}

export default Filter;
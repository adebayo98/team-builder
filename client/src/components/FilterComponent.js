import React, {Component} from 'react';
import $ from "jquery"

/* COMPONENTS */
import InputCheckbox from './ui/InputCheckbox';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            formations:[],
            roles: [],
        };
    }

    async componentDidMount() {
        Promise.all([
            fetch('http://hetic.adebayo.fr/api/formations'),
            fetch('http://hetic.adebayo.fr/api/roles')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => {
            this.setState({
                isLoading: false,
                formations: data1.result,
                roles: data2.result
            })
        });
    }

    bindFilter = (event) => {
        let filterFormation = []
        let filterRole = []
        document.querySelectorAll('.input-checkbox-component__value').forEach(item => {
            if(item.checked == true){
                item.getAttribute('data-filter') === 'role' ?
                    filterRole.push(item.getAttribute('data-value')) :
                    filterFormation.push(item.getAttribute('data-value'))
            }
        })

        document.querySelectorAll('.profile-card').forEach(item => {
            let asFomration = null
            let asRole = null

            filterFormation.forEach(filter => {
               if(item.classList.contains(filter)){
                   asFomration = true;
               }else if(!item.classList.contains(filter) && asFomration !== true){
                asFomration = false;
               }
            })

            filterRole.forEach(filter => {
                if(item.classList.contains(filter)){
                    asRole = true;
                }else if(!item.classList.contains(filter) && asRole !== true){
                    asRole = false;
                }
             })

             if(asFomration === false || asRole === false){
                 if(!item.classList.contains('hide')){
                    item.classList.add('hide')
                 }
             }else{
                item.classList.remove('hide')
             }

        })


    }

    render() {

        return(
            <div className={'filter-component d-f container-fluid'}>
                <h2 className={'filter-component__title'}>Flitre</h2>
                {this.state.isLoading ? 
                    <div className="ta-c">Loading students</div>
                :
                    <form id="filterForm" name="filterForm">
                        <div className={'filter-promotions'}>
                            <h3 className={'filter-promotions__title'}>{this.props.titlePromotions}</h3>
                                {this.state.formations.users.map( item => {
                                    return(
                                        <InputCheckbox 
                                            label = {item.code}
                                            function={this.bindFilter}
                                            dataFilter="formation"
                                        />
                                    )
                                })}
                        </div>
                        <div className={'filter-competences'}>
                            <h3 className={'filter-competences__title'}>{this.props.titleCompetences}</h3>
                            {this.state.roles.skill_types.map( item => {
                                return(
                                    <InputCheckbox 
                                        label = {item.role}
                                        function={this.bindFilter}
                                        dataFilter="role"
                                    />
                                )
                            })}
                        </div>
                    </form>
                }
            </div>
        );
    }

}

export default Filter;
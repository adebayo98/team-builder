import React, {Component} from 'react';

/* COMPONENTS */

import Filter from '../assets/img/icons/filter.svg';

class HeaderBottom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'header-bottom d-f container-fluid'}>
                <h1 className={'header-bottom__title'}>{this.props.title}</h1>
                { this.props.menu ?
                <div className={'header-bottom__content d-f'}>
                    <ul className={'d-f'}>
                        <li>ALL</li>
                        <li>ÉLÈVES</li>
                        <li>INTERVENANTS</li>
                    </ul>

                    <div className={'buttons'}>
                        <button className={'button-second'}>
                            <img src={Filter} />
                        </button>
                    </div>
                </div>
                :null }
            </div>
        );
    }

}

export default HeaderBottom;
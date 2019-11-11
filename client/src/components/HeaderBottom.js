import React, {Component} from 'react';

/* COMPONENTS */

import SmallButton from './ui/SmallButton';

class HeaderBottom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'header-bottom d-f container-fluid'}>
                <h1>{this.props.title}</h1>
                <div className={'header-bottom__content'}>
                    <ul className={''}>
                        <li>All</li>
                        <li>ÉLÈVES</li>
                        <li>INTERVENANTS</li>
                    </ul>

                    <SmallButton 
                        buttonReturn=""
                    />
                    <button>+</button>
                </div>
            </div>
        );
    }

}

export default HeaderBottom;
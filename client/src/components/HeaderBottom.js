import React, {Component} from 'react';

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

                    <button>+</button>
                    <button>+</button>
                </div>
            </div>
        );
    }

}

export default HeaderBottom;
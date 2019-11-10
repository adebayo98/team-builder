import React, {Component} from 'react';

class HeaderBottom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        return(
            <div className={'header-bottom'}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }

}

export default HeaderBottom;
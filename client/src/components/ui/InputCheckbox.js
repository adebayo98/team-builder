import React from 'react';

class InputCheckbox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checked : false
        }
    }

    render() {

        const { props } = this;

        return(
            <fieldset className={'input-checkbox-component'}>
                {/* Value */}
                <input
                    className={'input-checkbox-component__value'}
                    type={'checkbox'}
                    style={{'--label': '"'+ props.label +'"'}}
                    name='filter[]'
                    onClick={this.props.function}
                    data-filter={this.props.dataFilter}
                    data-value={this.props.label}
                />
                {/* Error */}
                <p className={'input-email-component__error ' + (props.error ? '' : '_hide')}>{props.error}</p>
            </fieldset>
        );
    }
}

export default InputCheckbox;
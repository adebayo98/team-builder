import React from 'react';

class InputSelect extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentOption: {},
        };
    }

    componentDidMount() {
        if (this.props.currentOption){
            this.props.options.map((option, index) => {
                if (option.value === this.props.currentOption){
                    this.setState({currentOption: this.props.options[index]});
                    this.props.onSelectChange(this.props.options[index].value);
                }
            });
        } else {
            this.setState({currentOption: this.props.options[0]});
            this.props.onSelectChange(this.props.options[0].value)
        }
    }

    toggleOptions = (event) => {
        event.currentTarget.classList.toggle('active');
    }

    changeState = (event) => {
        this.props.onSelectChange(event.target.getAttribute('data-value'));
        this.setState({currentOption: {
                'label': event.target.innerHTML,
                'value': event.target.getAttribute('data-value'),
            }}
        );
    }

    render() {
        const options = this.props.options.map((option, index) =>
            <li key={index}
                className={option.value === this.state.currentOption.value ? 'option-list__item current' : 'option-list__item'}
                data-value={option.value} onClick={(event) => this.changeState(event)}>
                {option.label}
            </li>
        );

        return(
            <fieldset className={'input-select-component'}>
                <label> {this.props.label} </label>
                <ul className={'option-list'} onClick={(event) => this.toggleOptions(event)}>
                    <li className={'option-list__item-current'} data-value={this.state.currentOption.value}> {this.state.currentOption.label} </li>
                    <div className={'option-list__items'}>
                        {options}
                    </div>
                </ul>
            </fieldset>
        );
    }
}

export default InputSelect;
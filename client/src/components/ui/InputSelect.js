import React from 'react';

class InputSelect extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentOption: {},
        };
    }

    componentDidMount() {
        /* Get current option */
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

    // Display or hide options
    toggleOptions = (event) => {
        // Toggle options list
        event.currentTarget.classList.toggle('active');
    }

    // Change state
    changeState = (event) => {
        // Traced back new current option value
        this.props.onSelectChange(event.target.getAttribute('data-value'));
        // Update set
        this.setState({currentOption: {
                'label': event.target.innerHTML,
                'value': event.target.getAttribute('data-value'),
            }}
        );
    }

    render() {
        // Build options with layout
        const options = this.props.options.map((option, index) =>
            <li key={index}
                className={option.value === this.state.currentOption.value ? 'option-list__item current' : 'option-list__item'}
                data-value={option.value} onClick={(event) => this.changeState(event)}>
                {option.label}
            </li>
        );

        return(
            <fieldset className={'input-select-component'}>
                {/* Label */}
                <label> {this.props.label} </label>
                {/* Option List */}
                <ul className={'option-list'} onClick={(event) => this.toggleOptions(event)}>
                    {/* Option list current item */}
                    <li className={'option-list__item-current'} data-value={this.state.currentOption.value}> {this.state.currentOption.label} </li>
                    {/* Option list items */}
                    <div className={'option-list__items'}>
                        {options}
                    </div>
                </ul>
            </fieldset>
        );
    }
}

export default InputSelect;
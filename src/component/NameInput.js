import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NameInput extends Component {

    static propTypes = {
        updateName: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            nameInputValue: ""
        }
    }

    handleInputChange = event => {
        this.setState({
            nameInputValue: event.target.value
        });
    }

    render() {
        const onButtonClick = () => {
            this.props.updateName(this.state.nameInputValue);
        }
        return (
            <div>
                <input type="text"
                    value={this.state.nameInputValue}
                    onChange={this.handleInputChange} />
                <button onClick={onButtonClick}>submit</button>
            </div>
        )
    }
}

export default NameInput;
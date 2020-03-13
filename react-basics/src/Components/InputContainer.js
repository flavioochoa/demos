import React, { Component } from 'react';
import Button from './Button';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            inputValue : '',
            listItems: ['revisar pull de balde', 'practicar to do list', 'presentacion'],
        }
    }

    render() {
        return (
            <div>
                <input
                    placeholder="cosas por hacer"
                    value={ this.state.inputValue }
                    onChange={ this.handleOnChange }
                    onKeyUp= { this.handleKeyUp }
                />
                <Button 
                    onClick = {this.handleOnClick}
                    text = "Añadir"
                />
            </div>
        );
    }

    handleOnChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleOnClick() {
        this.addItemToList();
    }

    addItemToList() {
        //TODO validate empty inputValue
        this.setState({ 
            inputValue: '', 
            listItems: [...this.state.listItems, this.state.inputValue ]
        });
    }

    handleKeyUp(e) {
        if(e.keyCode == 13) {
            this.addItemToList();
        }
    }
}

export default InputContainer;
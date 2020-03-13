import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import ListItem from './Components/ListItem';
import Title from './Components/Title';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            listItems: ['revisar pull request pendientes', 'revisar email', 'ver tareas pendientes', 'presentación'],
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.viewState = this.viewState.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div>
                <Title text="Lista de cosas por hacer" />
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
                <ListItem
                    listItems= {this.state.listItems}
                    deleteItem = { this.deleteItem }
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button 
                    onClick = {this.viewState}
                    text = "ver state"
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

    handleKeyUp(e) {
        if(e.keyCode === 13) {
            this.addItemToList();
        }
    }

    addItemToList() {
        this.setState({ 
            inputValue: '', //TODO validate empty inputValue  
            listItems: [...this.state.listItems, this.state.inputValue ]
        });
    }

    deleteItem(e) {
        let { index } = e.target.dataset;
        index = parseInt(index);
        this.setState({
            listItems: [...this.state.listItems.slice(0, index), ...this.state.listItems.slice(index + 1)]
        });
    }

    viewState() {
        console.log(this.state);
    }
}

export default App;

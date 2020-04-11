import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state={
            book:{}
        }
    }

    componentDidMount() {
        fetch("/books")
        .then(response => response.json())
        .then(data=> {
            this.setState({
                book:data
            })
        })
    }
  

      render() {
        return (
            <div>
                {this.state.book.title}
            </div>
        )
    }
}

export default App;

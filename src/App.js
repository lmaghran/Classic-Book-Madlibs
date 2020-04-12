import React from 'react';
import './App.css';
import Book from "./Components/Books.js"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            allBooks:[]
        }
    }

 componentDidMount() {
        fetch("/books")
            .then(response => response.json())
            .then(data=> {
                console.log(data)
                const books = data
                this.setState({ allBooks: books })
                console.log(this.state)
            })
    }

    

    render(){
        const eachbook = this.state.allBooks.map(item => <Book key= {item.title} item={item}/>);
    
        return (
            <div>               
                {eachbook}
            </div>

        )
    }
}


export default App;

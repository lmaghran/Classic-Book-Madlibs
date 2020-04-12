import React from 'react';
import './App.css';
import Book from "./Components/Books.js"
import Autocomplete from "./Components/Autocomplete.js"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            allBooks:[],
            allBooksTitles:[]
        }
    }

 componentDidMount() {
        fetch("/books")
            .then(response => response.json())
            .then(data=> {
                const books = data
                this.setState({ allBooks: books })
                
            })

        const eachbook = this.state.allBooks.map(item => <Book key= {item.title} item={item}/>);
        

    }

    

    render(){
        let sug = []
        this.state.allBooks.map(item => sug.push(item.title));
        
        return (
            <div>               
                <Autocomplete suggestions= {sug} />
            </div>

        )
    }
}


export default App;

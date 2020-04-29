import React from 'react';
import './App.css';
import Book from "./Components/Books.js"
import BookForm from "./Components/BookForm.js"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            allBooks:[],
            allBooksTitles:[],
            bookTextsection:""
        }
    }

 componentDidMount() {
        fetch("/books")
            .then(response => response.json())
            .then(data=> {
                const books = data
                this.setState({ allBooks: books })
                console.log(this.state.allBooks)
                
            })

        const eachbook = this.state.allBooks.map(item => <Book key= {item.title} item={item}/>);
        

    }


    render(){
        let sug = []
        this.state.allBooks.map(item => sug.push(item.title));
        
        return (
            <div> 
                < BookForm />              
            </div>

        )
    }
}


export default App;

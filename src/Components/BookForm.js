import React from 'react';
import Book from "./Books.js"
import Autocomplete from "./Autocomplete.js"

class BookForm extends React.Component {

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

        
    }


    render(){
        let sug = []
        this.state.allBooks.map(item => sug.push(item.title));
        const eachbook = this.state.allBooks.map(item => <Book key= {item.title} item={item}/>);

        
        return (
            <div>               
                <h2> Please choose your book here: </h2>
                    <form action='/book_text'>
                            <Autocomplete suggestions={sug} />
                        <button > Click here to start Madlibs</button>
        
                    </form>
             </div>

        )
    }
}


export default BookForm;

import React from "react"

function Book(props) {
    return (
        <div className="book">
        <h3> {props.item.title} </h3>
        <p> {props.item.author} </p>
        </div>
    )
}

export default Book
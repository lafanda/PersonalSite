import React, { useState, useEffect } from 'react';

function Book(props) {
    const apiKey = "AIzaSyCF7E2azvmskqmeVXOsDROTYUyq-kZcNfE"; // replace with your own API key
    
    const [title, setTitle] = useState("");
    const [src, setSrc] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDiscription] = useState("");

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${props.bookISBN}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setSrc(data.items[0].volumeInfo.imageLinks.thumbnail);
                setTitle(data.items[0].volumeInfo.title);
                setRating(props.rating);
                setDiscription(data.items[0].volumeInfo.description);
            })
            .catch(error => console.error(error));
    }, [props.bookISBN, apiKey,props.rating]);


    return (
        <div className = 'bookDisplay'>
            <img className="book" src={src} alt="" />
            <h2>{title}</h2>
            <h5 className = 'personalRating'>Personal Rating: {rating}/10</h5> 
            <p className = 'bookDescription'>{description}</p>
        </div>);
}


export default Book
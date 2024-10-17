import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 

class BookObj {
    constructor(image,title,author){
        this.image = image;
        this.title = title;
        this.author = author;
    }
}

function Greeting() {
    return <>
    <h2>My First Component</h2>
    <ul>
        <li>
            <a href='#'>hello world</a>
        </li>
    </ul>
    </>
}

const BookList = () =>{
    const bookList = [new BookObj("image1.jpg","Book1","Author1"), 
                      new BookObj("image1.jpg","Book2","Author2"),
                      new BookObj("image1.jpg","Book3","Author3")]
    
    useEffect(()=>{
        document.title = "My First React Project"
    },[])
    return (
        <section className='booklist'>
           { bookList.map((book)=>{
                return <Book image1={book.image} title={book.title} author={book.author}/>
            })}
        </section>
    )
}

const Book = ({image1,title,author}) =>{
    return (
    <article className='book'>
        <Image image1 = {image1}/>
        <Title title = {title}/>
        <Author author = {author}/>
    </article> 
    )
}

const Image = ({image1}) => {
    let imageNew = './images/'+image1;
    return (<img src={imageNew} alt = "testImage"/>)
}
const Title = ({title}) => <h2>{title}</h2>
const Author = ({author}) => {
    return <h4 style={{color:'#617d98',fontSize:'2rem', marginTop:'0.5rem'}}>{author.toUpperCase()}</h4>
}
// function Greeting() {
//     return React.createElement('h2',{},'hello world')
// }

// function Greeting() {
//     return React.createElement('div',{},React.createElement('h2',{},'hello world'))
// }
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class BookObj {
  constructor(id,image, title, author) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.author = author;
  }
}

function Greeting() {
  return (
    <>
      <h2>My First Component</h2>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </>
  );
}

const BookList = () => {
  const bookList = [
    new BookObj(1,"image1.jpg", "Book1", "Author1"),
    new BookObj(2,"image1.jpg", "Book2", "Author2"),
    new BookObj(3,"image1.jpg", "Book3", "Author3"),
  ];

  const getBook = (id) => {
    const book = bookList.find((book) => book.id === id);
    console.log(book);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formValues = {};
    data.forEach((value, key) => {
      formValues[key] = value;
    });
    console.log(formValues)
  };

  useEffect(() => {
    document.title = "My First React Project";
  }, []);
  return (
    <section className="booklist">
      <EventExamples handleNewFormSubmit={handleFormSubmit} />
      {bookList.map((book, index) => {
        return (
          <Book
            key={index}
            id = {book.id}
            image1={book.image}
            title={book.title}
            author={book.author}
            getBook={getBook}
          />
        );
      })}
    </section>
  );
};

const Book = ({ id, image1, title, author, getBook }) => {
  return (
    <article className="book">
      <Image image1={image1} />
      <Title title={title} />
      <button onClick={()=>getBook(id)}>display title</button>
      <Author author={author} />
    </article>
  );
};

const Image = ({ image1 }) => {
  let imageNew = "./images/" + image1;
  return <img src={imageNew} alt="testImage" />;
};
const Title = ({ title }) => <h2>{title}</h2>;
const Author = ({ author }) => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "2rem", marginTop: "0.5rem" }}>
      {author.toUpperCase()}
    </h4>
  );
};
// function Greeting() {
//     return React.createElement('h2',{},'hello world')
// }

// function Greeting() {
//     return React.createElement('div',{},React.createElement('h2',{},'hello world'))
// }

const EventExamples = ({handleNewFormSubmit}) => {
  const handleButtonClick = () => {
    console.log("button clicked");
  };
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formValues = {};
//     data.forEach((value, key) => {
//       formValues[key] = value;
//     });
//     console.log(formValues)
//   };
  const handleFormChange = (event) =>{
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
  }
  return (
    <section>
      <form onSubmit={handleNewFormSubmit}>
        <h2>Form Input</h2>
        <input
          type="text"
          name="example"
          id="example"
          onChange={handleFormChange}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit Form</button>
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

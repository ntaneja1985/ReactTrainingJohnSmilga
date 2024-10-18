# React Training by John Smilga
React Training by John Smilga (Udemy)
- Main Benefits
- Independence
- Reusability
- Speed

- npm helps us to install external packages

# Difference between npm and npx

- npm (Node Package Manager) and npx (Node Package Execute) are both tools that come with Node.js, but they serve different purposes.

- npm: It's mainly used for managing packages and dependencies. You use it to install, update, and uninstall packages or libraries in your project. Example: npm install express installs the Express library for your project.

- npx: It's designed to execute binaries from npm packages. You can use it to run commands without globally installing the package. Example: npx create-react-app my-app runs the create-react-app command to set up a new React application without needing to install create-react-app globally. In essence, npm is your go-to for managing packages, while npx is your tool for running package binaries directly.

- Entire React Application lives in here

```html
<div id = "root"></div>
```

- package.json contains dependencies and scripts
- package-lock.json --> It is a snapshot of our entire dependency tree
- It ensures that everyone working on the project installs exactly the same versions of the dependencies, regardless of when they run npm install.

- Create root element and render everything inside the root

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
    return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
```

- Above code is all JSX
- JSX is easier, otherwise we will have to use React Element like this:

```js

function Greeting() {
     return React.createElement('h2',{},'hello world')
 }
function Greeting() {
    return React.createElement('div',{},React.createElement('h2',{},'hello world'))
}

```
- If we put our assets(images) in public folder they get optimized(similar to wwwroot)
# JSX - CSS (inline styles)
- style prop
- {} in JSX means going back to JS Land
- value is an object with key/value pairs - capitalized and with ''

```js
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Jordan Moore
  </h4>
);
```

- Alternative Option
```js
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};

```
- In Inline styles general CSS rules apply. 
- Inline Style always override CSS file styles

# Children Prop
- everything we render between component tags
- during the course we will mostly use it Context API
- special prop, has to be "children"
- can place anywhere in JSX

```js
function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // rest of the logic
};
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
```

# Key Prop
- The key prop in React is crucial for keeping your UI efficient and consistent. 
- When rendering lists of elements, the key helps React identify which items have changed, been added, or removed. 
- Without it, React would have to re-render the entire list every time something changes, which is not efficient.

```js
const items = ['Apple', 'Banana', 'Cherry'];

const listItems = items.map((item, index) => 
  <li key={index}>{item}</li>
);

return <ul>{listItems}</ul>;


```
- Each list item has a unique key prop, which helps React update the list efficiently.
- Using indexes as keys can be a quick solution, but for more dynamic lists, unique identifiers are better to avoid bugs.

# For copying objects use the spread operator

```js
const friends = ['john', 'peter', 'anna'];
const newFriends = [...friends, 'susan'];
console.log(friends);
console.log(newFriends);
const someObject = {
  name: 'john',
  job: 'developer',
};
// COPY NOT A REFERENCE !!!!
const newObject = { ...someObject, location: 'florida' };
console.log(someObject);
console.log(newObject);

```

- Pass Data with help of spread operator:

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book  {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
const Book = ({ img, title, author }) => {
  // rest of the code
};

```

# Why do we do {()=>handleClick} instead of {handleClick}
- This is a javascript feature {handleClick} is immediately invoked, but when we use anonymous function syntax it is invoked on the basis of an event like button click
- Using {()=>handleClick} creates an anonymous function that calls handleClick, ensuring the function isn't invoked immediately during rendering. 
- It passes a new function reference each time, which can cause unnecessary re-renders.
- On the other hand, {handleClick} directly passes the function reference, calling it on the event, which is more efficient if the function doesn't require arguments or context.
- Basically: {()=>handleClick} = safe but might re-render more, {handleClick} = efficient but use cautiously.

### Import and Export Modules(ES6 Modules) help to organize our application

### React optimizes images stored in the src folder

***rem stands for "root em" and is a unit in CSS used for sizing elements relative to the root element's font size. Unlike em, which is relative to the font size of its parent element, rem is always relative to the root <html> element.***

```js
html {
  font-size: 16px; /* Default root font size */
}

body {
  font-size: 1rem; /* 16px */
}

h1 {
  font-size: 2rem; /* 32px */
}


```
- rem ensures consistency through our project

## npm run build builds a production ready application








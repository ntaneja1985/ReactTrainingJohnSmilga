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

# Vite is faster than Create-React-App
- has hot module refresh and provides a better developer experience

# Initial Render and Re-Renders
- In a React application, the initial render is the first time that the component tree is rendered to the DOM. 
- It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.
- Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. 
- React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.
- There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

# General Rules of Hooks
- starts with "use" (both -react and custom hooks)
- component must be uppercase
- invoke inside function/component body
- don't call hooks conditionally 
- set functions don't update state immediately 

# In useState() if we generate a new state, then we trigger a re-render

# Automatic Batching

- In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

- By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

- React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.
  
- Keep in mind that the state update function setState does not immediately mutate the state. 
- Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle.
-  Be mindful when you need to set state value based on a different state value.
  
# useState hook

## State doesnot update immediately after calling setFunction
- Keep in mind that the state update function setState does not immediately mutate the state. Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle.

- If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. 
 ### To update the state synchronously we can do it like this:

 ```js
const handleClick = () => {
  setValue((currentState) => {
    // must return otherwise undefined
    // below is the latest/current state value
    const newState = currentState + 1;
    return newState;
  });
};

 ```

 **In Javascript functions by default return undefined**

 # useEffect hook

 - useEffect is a hook in React that allows you to perform side effects in function components.
 - There is no need for urban dictionary - basically any work outside of the component. 
 - Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

## Inside the useEffect we need to cleanup components also

```js
import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;

```

# Why use Axios instead of Fetch API

- Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be indicative of a successful request. So for fetch API we have the do the following:

```js
try {
const resp = await fetch(url);
// console.log(resp);
if (!resp.ok) {
  setIsError(true);
  setIsLoading(false);
  return;
}

const user = await resp.json();
setUser(user);

}

```
# Truthy and Falsy Values in Javascript

- In JavaScript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

- Here is a list of values that are considered falsy in JavaScript:

- false 0 (zero)
-  "" (empty string) 
-  null 
-  undefined 
-  NaN (Not a Number) 
  
All other values, including objects and arrays, are considered truthy.

```js
const x = 'Hello';
const y = '';
const z = 0;

if (x) {
  console.log('x is truthy');
}

if (y) {
  console.log('y is truthy');
} else {
  console.log('y is falsy');
}

if (z) {
  console.log('z is truthy');
} else {
  console.log('z is falsy');
}

// Output:
// "x is truthy"
// "y is falsy"
// "z is falsy"

```
- In this example, the variable x is a non-empty string, which is considered truthy, so the first if statement is executed. 
- The variable y is an empty string, which is considered falsy, so the else block of the second if statement is executed. 
- The variable z is the number 0, which is considered falsy, so the else block of the third if statement is executed.

# Short Circuit Evaluation

- In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

- The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

```js
const x = 0;
const y = 1;

console.log(x && y); // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x); // Output: 0 (the second operand is falsy, so it is returned)
```
- The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".

```js
const x = 0;
const y = 1;

console.log(x || y); // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(y || x); // Output: 1 (the first operand is truthy, so it is returned)

```
- Short-circuit evaluation can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met.

```js
function displayName(name) {
  return name || 'Anonymous';
}

console.log(displayName('Pizza')); // Output: "Pizza"
console.log(displayName()); // Output: "Anonymous"
```











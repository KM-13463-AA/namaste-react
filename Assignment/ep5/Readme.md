# Assignment5

## What is difference between named export, default export and * as export?
 1. Named exports are used to export multiple values by name and are imported using curly braces and same exact names.
 2. Default exports allow you to export a single value or function as the default and are imported without curly braces and with a custom name.
 3. * as exports are used to bundle all exports from a module into a single object, which can be imported using a chosen namespace.

## What is the importance of config.js file?
 It is generally use dto keep hard coded data and it offers several benefits:
 1. It separates application's code and data.
 2. IT is often used to manage environment specific configuration such db connections, credentials,etc.
 3. It can store sensitive data like spi keys, tokens,db credentials that should not be hard coded in source code
 4. It can serve as documentation for application's configuration options.

## What are react hooks?
 React hooks are basically js fn only which makes managing state easier.They allow you to use features of the React library like lifecycle methods, state, and context in functional components.
 Imp points to note:
 1. They can only be called inside React function components.
 2. They can only be called at the top level of a component.
 3. They cannot be conditional

## Why do we need a useState hook?
 It allows functional components to manage state. It returns an array with two values: the current state and a function to update it
 E.g., const [data, setData] = useState([]);
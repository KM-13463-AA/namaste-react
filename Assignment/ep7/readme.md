# Assignment 7 

## What are the various ways to add image into our app? Explain with code examples.
 1.Using External URLs: We can use an external image URL in the src attribute of img tag. It may lead broken links etc. Hence, not recommended.
 E.g.,  <div className="App">
            <h1>Images React</h1>
            <img src={"https://images.xyz.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"} />
        </div>

 2. Using images from src folder: In this we download the image and import it from src folder. 
 This allows bundler to optimize image during the build process.
 E.g.,  import RedRose from './red-rose.jpg';

        function App() {
            return (
                <div className="App">
                    <h1>Images React</h1>
                    <img src={RedRose} />
                </div>
            );
        }
    You can also use the image in your CSS styles
    e.g.,   .myImage {
            background: url('./images/myImage.jpg');
            }

 3. Using images from public folder: In this we place the image in the public folder or in subdirectory within public and use it directly in html/jsx by specifying the path relative to the public folder. 
 These assets are served as static assets without bundling.
 E.g.,  function App() {
            return (
                <div className="App">
                    <h1>Images React</h1>
                    <img src="%PUBLIC_URL%/images/myImage.jpg" alt="My Image" />
                </div>
            );
        }
 We can use this to dynamically reference images based on variables, like in sliders where the image path is dynamic, by using `process.env.PUBLIC_URL`
 E.g.,  function App() {
            const index = 10;
            return (
                <div className="App">
                    <h1>Images React</h1>
                    <img src={process.env.PUBLIC_URL + `/images/myImage${index}.jpg`}/>
                </div>
            );
        }

 4. In SVG files: It can be imported like other image formats. Also they can be imported as react components.
 E.g.,  import { ReactComponent as PianoComponent } from './piano.svg';
        function App() {
            return (
                <div className="App">
                <h1>Images React</h1>
                <PianoComponent />
                </div>
            );
        }

## What would happen if we do console.log(useState())?
 We'll get an array with two elements- first element is the current state value and second is the fn that we will use to update the state.
 E.g., console.log(useState("Hello")); 
       Output: [ "Hello", f() ] //f is the updater fn

## How will useEffect behave if we don't add a dependency array?
 useEffect will behave depending upon dependency array:
 1. if no dependency array - useEffect is called on every render
 2. if empty dependecy array - useEffect is called once
 3. if dependency array contains something- whenever dependency changes, useEffect is called.

## What is SPA?
 SPA stands for Single Page Application. It is a website in which single HTML page is loaded initially and the rest interactions are done by dynamically updating the content on that page through JS.
 Key characteristics of SPA:
 1. Dynamic Loading: SPAs load resources as needed.
 2. Smooth Transition:
 3. Client-side Routing: Navigation within the application is handled on the client side.
 4. AJAX: SPAs use asynchronous request using fetch api or ajax to fetch data from the server in bg without requiring page refresh
 5. Framework/library usage: SPAs are commonly built using JavaScript frameworks or libraries such as React, Angular, or Vue.js. These tools provide the structure and functionality to create interactive and dynamic user interfaces.
 6. State Management:SPAs often involve complex state management, as the application's state needs to be managed on the client side. State management libraries like Redux (for React) are commonly used for this purpose.

## What is difference between client side and server side routing?
 Client Side Routing:
 1. All routing logics and rendering are performed on the client side without making requests to the server for new html pages.
 2. Smooth transitions between components and navigation is faster as only neccesary data is loaded not entire new html page.
 3. Commonly used with js frameworks or libraries. And often associated with SPAs
 4. Uses client-side routing libraries to manage navigation, such as React Router.
 Server Side Routing:
 1. Routing logic and rendering are performed on server. Server generates and seends complete html pages to the client in response of request.
 2. It involves full page reloads and requires server interaction for each request and hence results in  longer loading time.
 3. Associated with traditional multi page applications using express, node.js, etc
 4. Navigation is done by request response mechanism. Server determines the appropriate response based on requested URL.
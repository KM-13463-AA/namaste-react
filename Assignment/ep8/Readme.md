# Assignment 8

## How do you create nested routes react-router-dom configuration?
 Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data.
 
Nested routes in React Router is used to create a hierarchy of routes, in which each nested route is associated with a specific URL segment, and components for these routes are rendered hierarchically based on the URL.

// Configure nested routes with JSX
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="contact" element={<Contact />} />
      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          loader={redirectIfUser}
        />
        <Route path="logout" action={logoutUser} />
      </Route>
    </Route>
  )
);
// Or use plain objects
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            loader: redirectIfUser,
          },
          {
            path: "logout",
            action: logoutUser,
          },
        ],
      },
    ],
  },
]);

And an <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.

## Read about createHashRouter, createMemoryRouter from react router docs.

## What is the order of life cycle method calls in class based components?
 1. Mounting Phase: This deals with methods that are called when instance of component is created and inserted into DOM.
  `constructor()` : This is called when component is created and is used for initializing state and binding methods.
  `render()` : This is called when the component renders its UI.  
  `componentDidMount()` : This method is called after the component has been rendered to the DOM. It is often used for initiating network requests or integrating with other JS frameworks.
 2. Updating Phase: These methods are called when a component is being re-rendered as a result of changes to either its props or state.
  `render()` : The render method is called again to update DOM.
  `componentDidUpdate()`:  This method is called after the component's updates are reflected to the DOM. It's often used for performing side effects or additional data fetching.
 3. Unmounting phase: This phase consist of methods which are called when component is being removed from the DOM. 
  `componentWillUnmount()`: This called before component is removed from the DOM. And it  is udes for cleanup such as canceling network requests, cleaning up timers, cleaning up subscriptions.
  
## Why do we use componentDidMount?
 1. We can fetch data from server or an API. Since this method is called after initial render it ensures that component has been added to DOM which makes it suitable for async operations.
 2. Here we can write operations where we directly interact with DOM such as setting up event listeners, measuring DOM elements, focusing on i/p fields.
 3. Third party library integration.
 4. Subscription to data or services.
 
## Why do we use componentWillUnmount?
1. To cleanup event listeners
 e.g.,  componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
2. Clearing timers and intervals:
 e.g.,  componentDidMount() {
            this.timerId = setInterval(() => {
                // Some periodic task
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerId);
        }
3. Canceling Network Requests
4. Cleaning Up resources

## Why do we use super(props) in constructor?
 In a class-based React component, the super(props) call in the constructor is used to call the constructor of the parent class, which is the React.Component class in the context of React components.
 This is necessary when defining a constructor in a class that extends another class, ensuring that the base class's constructor is executed before any specific logic in the derived class's constructor.

## Why can't we have the callback function of useEffect async?
 In React's useEffect hook, the callback function cannot be declared as async directly. This is because useEffect expects its callback function to return either nothing or a cleanup function, and async functions always return a Promise.
 For handling asynchronous code inside useEffect we can define a separate fn inside `useEffect` and call it immediately.
    useEffect(() => {
        fetchData().then(data => {
            // Handle the data
        });
    }, []);

    async function fetchData() {
        // Some asynchronous code
    }
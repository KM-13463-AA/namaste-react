# Assignment 11

## What is prop drilling?
 Prop drilling, also known as "threading" refers to the process of passing data from a higher-level component to a lower-level component through intermediate components in the hierarchy.
 Challenges:
 1. Component coupling: Coupling means components are dependent on each other, as components in the middle of the hierarchy need to accept and pass down props they don't necessarily use. 
 2.Maintenance Challenges
 Mitigating Prop Drilling:
 1. We can use context
 2. We can use state management libraries like redux.
 3. We can create custom hooks which will encapsulate logic and state management, allowing components to consume the hook without explicitly passing down props.

## What is lifting the state up?
 Lifting state up means moving the state from a component where it is locally managed to a common ancestor component that is higher in the component hierarchy
 It is used for scenarios where multiple components need to be aware of and interact with the same piece of data.

## What are context provider and context consumer?
 SomeContext.Provider: We use this to provide the context value to components.
 e.g.,  function App() {
        const [theme, setTheme] = useState('light');
            return (
                <ThemeContext.Provider value={theme}>
                    <Page />
                </ThemeContext.Provider>
            );
        }
 SomeContext.Consumer: It is an alternative and rarely used way to read the context value. It can be used with class based components where we don't use hooks.
 e.g.,  function Button() {
            return (
                <ThemeContext.Consumer>
                    {theme => (
                        <button className={theme} />
                    )}
                </ThemeContext.Consumer>
            );
        }
## If you don't pass a value to the provider does it take default value?
 
If we don't pass value to the Provider, it takes the default value specified when creating the context using createContext.
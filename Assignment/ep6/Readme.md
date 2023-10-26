# Assignment6 

## What is microservice?
 It is a software architectural style in which whole application is developed as collection of small services which are resposible for specifc function and are independent of others.
 
 Key characteristics and concepts of microservices include:
 1. Decomposition
 2. Independence
 3. Loose Coupling:  These services can communicate with others through APIs.
 4. Technology Diversity: Different microservices can use different technologies, databases, and programming languages, as long as they adhere to the agreed-upon API for communication. This flexibility allows teams to choose the right tools for the job.
 5. Resilience: If one service fails, it should not bring down the entire system. This can be achieved through redundancy, load balancing, and graceful degradation.
 6. Scalability: High-demand services can be easily scaled up to handle increased traffic, while less-used services can remain scaled down to conserve resources.
 7. Continuous Delivery: Microservices encourage the practice of continuous integration and continuous delivery (CI/CD), allowing teams to deliver updates and new features more rapidly.

## What is monolith architecture?
 It is a traditional software architecture where all the components of an application are tightly integrated and interconnected within a single codebase and executed as a single unit.

 Key characteristics and concepts of a monolithic architecture include:
 1. Single Codebase
 2. Tight Coupling
 3. Single Deployment
 4. Scaling Challenges: Scaling a monolithic application can be challenging because all components are part of a single unit. This can lead to inefficiencies when only specific parts of the application need additional resources.
 5. Development and Testing
 6. Limited Technology Choice: In a monolithic application, you are generally limited to using a single technology stack, database, and development framework for the entire application.
 7. Limited Flexibility
 8. Single Point of Failure: If one part of a monolithic application experiences issues or crashes, it can affect the entire application.


## Why do we need a useEffect hook?
 It is used for handling operations or actions that occur outside of the normal component rendering process and are often related to tasks such as:
 1. Data fetching
 2. Asynchronous Operations
 3. DOM manipulation
 4. Lifecycle Events: It can be used instead of lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.
 5. Resource Cleanup

## What is optional chaining?
 It is a feature by which we can safely access any methods or properties of object without checking, explicitly, if intermediate objects or properties exist.
 E.g., const greeting = greeter.greet?.('Anjali');

## What is shimmer ui?
 It is a visual loading the mimics the layout of content that will eventually appear. It just enhances the user experience by making it feel more responsive.

## What is difference between js expression and js statement
 Expression is a bit of js code which produces a value
 E.g., 1, "hello", 5 * 10, num > 100, isHappy ? "🙂" : "🙁", [1, 2, 3].pop()
 Expressions can contain expressions.
 E.g., (5+1)*2 
       in this 5 expressions are: "5", "1", "2", "(5+1)", "(5+1)*2"
                
 Statement is a instruction for computer to do something.
 E.g., let hi = 5;, throw new Error('Something exploded!');
 Statements can have expression slot where we can put any expression and it will be syntactically valid.

 Note: Expressions can't exist on their own. They're always part of a statement. So in this case, we have a statement that looks like this:/* expression slot */

 Note: We can't put any JavaScript inside the curly brackets. We can only include expressions, not statements. If we try to embed a statement in {} we'll get an error. This is not react but js limitations.
 E.g., function CountdownClock({ secondsRemaining }) {
        return (
                //Throws a SyntaxError
                <div>
                {if (secondsRemaining > 0) {
                    `${secondsRemaining} seconds left`
                } else {
                    "Time expired!"
                }}
                </div>
            );
        }

        function CountdownClock({ secondsRemaining }) {
            return (
                //No problemo
                <div>
                {secondsRemaining > 0
                    ? `${secondsRemaining} seconds left`
                    : "Time expired!"
                }
                </div>
            );
        }

## What is conditional rendering?
 It is a practice of rendering content or components based on certian conditions.
 It can be used in shimmer, user authentication, roles n permissions, form validaton,etc.

## What is CORS?
 CORS stands for cross origin resource sharing. It is a security feature that controls how web pages in one domain can request and interact with resources located on a different domain.
 An "origin" is a combination of a protocol (e.g., http, https), a domain (e.g., example.com), and a port (e.g., 80, 443).

## What is async and await?
 Both 'async' and 'await' are used to make asynchronous code more readable and maintainable especially when we have complex sequence of asynchronous operations or we need to ensure that second operation starts before completion of one.
 'async' keyword is used to make fn asynchronous. Asynchronous fn is a fn that returns a promise implicitly.
 'await' keyword is used to pause the execution of function until a promise is resolved.

## What is the use of `const json= await data.json();` in getRestaurants()?
 This code takes the response from a network request, read and parse the JSON data from the response body, and make that JSON data available for further processing in the form of a JavaScript object stored in the json variable.

 The await keyword is used to pause the execution of the function until the Promise returned by data.json() is resolved. 

## Note:
 All function arguments must be expressions. 
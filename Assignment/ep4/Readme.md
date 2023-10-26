# Assignment4

## Is JSX mandatory for react?
 No, it is just a syntax extension through which we can write html code within js code.
 However, it offera some advantages:
 1. It enables us to create rreact components .
 2. It increases redability.
 3. We can easily embed js code inside jsx using {} .

## Is ES6 mandatory for react?
 It is not mandatory. However using es6 features in react development provides many advantages, makes our react code more concise and maintainable.

 1. Spread Operator : It can be useful for copying and merging objects and arrays, which is needed in React when dealing with state and props.
 E.g.,  In arrays- 
        const originalArray = [1, 2, 3];
        const copiedArray = [...originalArray];// this will copy original array

        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const mergedArray = [...array1, ...array2];

 In react, when we need to update variable while preserving it's existing data, spread operator is used to create new obj with updated value.
 Also, when we want to pass props from parent to child component we can use spread operatorto create new props object with desired changes.
 e.g.,   const App = () => {
        const commonProps = { prop1: 'value1', prop2: 'value2' };

        return (
            <ChildComponent
            {...commonProps}
            prop2="updatedValue" // Modify an existing prop
            prop3="value3" // Add a new prop
            />
        );
        };

 2. Arrow functions : used  to write fn in more clean way.
 3. Classes : USed to create React component.
 4. Promises: It makes handling async operations smoother.
 5. Destructuring: It makes extraction of data from objecta and arrays easier.

## How to write comment in jsx?
 Single line comment: {/* A JSX comment */}
 Multi line comment:  {/* 
                       Multi
                       line
                       comment
                       */}  


## What is <React.Fragment></React.Fragment> and <></>?
 Both are used to define fragments through which we can group multiple elements without using any additional dom element which serves several imp purposes:
 1. Cleaner html output - 
 2. Reducing dom tree
 3. Simplified css selectors
 4. Improved accessibility
  And <></> is just shorthand way to create fragment.

## What is virtual DOM?
 It is a representation of actual dom and it is very fast to compare due to it's light weight as it is js obj not html code.

## What is reconciliation in React?
 It is an algorithm to update dom using diff algo which compares the current virtual dom with previous virtual dom and reflect these differences in real DOM.
 It is also know as diffing algorithm.

## What is react fiber?
 React Fiber is a major internal reimplementation of the React library's core algorithm. 
 
 It was created to address limitation of original reconciliation algorithm such as potential for blocking main thread during updates making it challenging to implement features like incremental rendering (updating parts of the UI without blocking the entire update) and concurrent updates (prioritizing certain updates over others).

 React fiber represents work as fiber tree allowing react to prioritize, interrupt amd resume rendering work. Due to which react can handle complex UIs, concurrent updates and large applicatoins.

## Why we need keys in react? When do we need keys in react?
 'keys' are  attributes that helps react to identify and keep track of each individual components or elements of a list while rendering. 
 Keys improves the performance and maintain the consistency of component rendering in react.

## Can we use index as keys in React?
 We can but it is not recommended as it can be problematic in case the list of item changes bcz when items will change the index of elements will also change which will lead to incorrect identification of which element corresponds to which componnent leading to unexpected behavior.

## What is props in react?
 props is a way of passsing data from parent component to child component. It makes component reusable.
 1. Props are read-only
 2. Props allows customize behavior of child based on the data provided by parent component
 3. They make it easy to build complex ui by breaking them downn into small reusable components

## What is config driven ui?
 It is a ui where layout and behavior of ui are controlled through external configuration or data. This makes ui more flexible, reusable and dynamically customizable
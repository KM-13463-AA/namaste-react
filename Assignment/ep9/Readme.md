# Assignment 9

## When and why do we need lazy()?
 When our app grows the size of our js bundle also become large which can result into slower initial loading. Hence we do code splitting. Code splitting, which is a technique to improve performance by loading only the necessary code for the current view or feature, uses this lazy().
 e.g., const LazyComponent = lazy(() => import('./LazyComponent'));

 Code splitting is also known as chunking/code spliting/ dynamic bundling/lazy loading/ on demand loading/ dynamic import.

## What is suspense?
 It is used with the lazy() function to define fallback content to display while waiting for some asynchronous operation to complete such as data fetching or lazy loading of components.

 e.g.,  import React, { lazy, Suspense } from 'react';
        const LazyComponent = lazy(() => import('./LazyComponent'));
        function MyComponent() {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyComponent />
                </Suspense>
            );
        }

 Suspense can also be used for asynchronous operation including data fetching.
 e.g.,
 import React, { Suspense, useEffect, useState } from 'react';

 const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded!'), 2000);
  });
  
const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  if (!data) {
    // Show a loading message if data is not available yet
    return <div>Loading data...</div>;
  }

  // Render the component with the fetched data
  return <div>{data}</div>;
};

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}

## Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
 It occurs when a component is unable to respond to synchronous input and needs to suspend the update to fetch data or perform other asynchronous tasks. 

 To handle this issue we can wrap component with suspense
 <Suspense fallback= {// here we'll pass piece of jsx }> Component here </Suspense>
 This placeholder/fallback will tell us what should react render when component which is using lazy loading is not there. 

## Advantages and disadvantages of using this code splitting pattern?
 Advantages of code splitting:
 1. Faster initial page load: It reduces the size of initial js bundle leading to faster loading time.
 2. Optimized Resource Usage: It optimizes network resources usage and reduces unnecessary code execution.
 3. Improved Performance: Smaller bundles result in quicker parsing and execution of js, leading to improved performance
 4. Efficient Caching: It allows for better caching strategies. Shared dependencies can be cached once and reused across different parts of the application, reducing redundant downloads.
 5. Enhanced Developer Experience: It enhance the developer experience by making the codebase more modular and easier to manage. 
 6. Improved Parallel Loading: It enables parallel loading of different parts of the application, taking advantage of the browser's ability to fetch resources concurrently, further speeding up the loading process.

 Disadvantages of code splitting:
 1. Increased Complexity: Developers need to decide which parts of the application to split, manage dependencies, and handle asynchronous loading.
 2. Tooling and Configuration Challenges:  Proper configuration of build tools and bundlers is required for effective code splitting. 
 3. Runtime Overhead: Slight overhead maybe associated with dynamic loading of modules and there may be a delay in rendering.
 4. Tool Dependency: Some code splitting implementations are tied to specific build tools or bundlers, switching between bundlers might require adjustments to code splitting strategy.
 5. Risk of Over-Splitting: Over splitting is possible negating the benefits of splitting
 6. Potential for Cumulative Loading Delays
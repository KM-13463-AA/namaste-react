import React, { Suspense,lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));
import { StrictMode } from 'react';
import UserContext from "./utils/UserContext";

const AppLayout =() => {
    const [userName, setUserName] =useState();

    useEffect(() => {
        //Here we will write logic for making an API call and sending username nd pwd
        //We received data
        const data = {
            name: "Anjali",
        };
        setUserName(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>

    );
};

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/grocery",
                    element: <Suspense fallback={<h1>Loading..</h1>}>
                                <Grocery />
                            </Suspense>,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },
            ],
            errorElement: <Error />,
        },
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>< RouterProvider router= {appRouter} /></StrictMode>);


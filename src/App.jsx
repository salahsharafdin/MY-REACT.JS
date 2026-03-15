import React from "react";

import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import { Outlet } from "react-router";


const App = () => {
    return (
        <>
       <Outlet />
        </>
    )
}
export default App
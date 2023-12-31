import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 font-rancho">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
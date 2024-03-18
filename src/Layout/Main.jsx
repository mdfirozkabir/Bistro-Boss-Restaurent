import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer";
import Navbar from "../Pages/Shered/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
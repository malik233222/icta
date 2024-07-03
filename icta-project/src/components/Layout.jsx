import '../assets/style/layout.scss'
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import '../index.css'

export default function Layout() {
    return (
        <>
            <div>

                <div className='sidebar'>
                    {/* <Sidebar /> */}
                </div>

                <div className="custom-container">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>

            </div>

        </>

    )
}

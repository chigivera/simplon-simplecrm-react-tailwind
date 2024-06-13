import React from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


class Layout extends React.Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="flex">
            <Sidebar/>
            {this.props.children}

            </div>
            <Footer/>
            </>
        );
    }
}

export default Layout;
import React from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import DataContextProvider from "./context/DataContext";


class Layout extends React.Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="flex">
            <Sidebar/>
            <div className="relative bg-violet-400">
            <DataContextProvider>

            {this.props.children}
            </DataContextProvider>
            </div>
            </div>
            <Footer/>
            </>
        );
    }
}

export default Layout;
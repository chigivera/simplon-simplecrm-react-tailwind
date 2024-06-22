import React from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import DataContextProvider from "./context/DataContext";
import { ThemeContext } from "./context/ThemeContext";

class Layout extends React.Component {
    render() {
        const { title } = this.props;
        console.log(title);
        return (
            <>
                <ThemeContext.Consumer>
                    {({ isLightTheme, light, dark }) => {
                        const theme = isLightTheme ? light : dark;
                        return (
                            <>
                                <Navbar />
                                <div className="flex">
                                    <Sidebar />
                                    <div className="relative bg-violet-400 h-screen w-full overflow-x-auto" style={{ background: theme.palette.secondary.main, color: theme.palette.background.default }}>
                                        <div className="flex mx-5 mt-5">
                                            <legend className="font-bold text-3xl">{title}</legend>
                                        </div>
                                        <DataContextProvider>
                                            {this.props.children}
                                        </DataContextProvider>
                                    </div>
                                </div>
                                <Footer />
                            </>
                        );
                    }}
                </ThemeContext.Consumer>
            </>
        );
    }
}

export default Layout;

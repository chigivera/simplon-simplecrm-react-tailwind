
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineSetting } from "react-icons/ai";

class Sidebar extends React.Component {
    static contextType = ThemeContext; // Define the contextType

    render() {
        const { isLightTheme,light ,dark ,toggleTheme} = this.context; // Access the theme context
        const theme = isLightTheme? light : dark
        return (
            <div className="sidebar w-60 flex flex-col h-screen"
            style={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.main,
                padding: "10px",
                fontSize: "20px"
            }}
        >   
            <nav>
                <a href="/">
                <div className="sidebar-link flex py-4 px-2 items-center hover:bg-violet-700 hover:text-neutral-50">
                <AiOutlineSetting style={{fontSize:theme.typography.h3.fontSize}}/>
                <h1 className="pl-4" style={{fontSize:theme.typography.h3.fontSize}}>
                Dashboard
                </h1>
                </div>
                </a>
                <a href="/">
                <div className="sidebar-link flex py-4 px-2 items-center hover:bg-violet-700 hover:text-neutral-50">
                <AiOutlineSetting style={{fontSize:theme.typography.h3.fontSize}}/>
                <h1 className="pl-4" style={{fontSize:theme.typography.h3.fontSize}}>
                Dashboard
                </h1>
                </div>
                </a>
                <a href="/">
                <div className="sidebar-link flex py-4 px-2 items-center hover:bg-violet-700 hover:text-neutral-50">
                <AiOutlineSetting style={{fontSize:theme.typography.h3.fontSize}}/>
                <h1 className="pl-4" style={{fontSize:theme.typography.h3.fontSize}}>
                Dashboard
                </h1>
                </div>
                </a>
                <a href="/">
                <div className="sidebar-link flex py-4 px-2 items-center hover:bg-violet-700 hover:text-neutral-50">
                <AiOutlineSetting style={{fontSize:theme.typography.h3.fontSize}}/>
                <h1 className="pl-4" style={{fontSize:theme.typography.h3.fontSize}}>
                Dashboard
                </h1>
                </div>
                </a>
            </nav>
            
            </div>
        )
    }
}
export default Sidebar
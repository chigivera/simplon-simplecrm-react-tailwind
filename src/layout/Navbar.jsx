import React from "react";
import { ThemeContext } from "../context/ThemeContext"; // Ensure this import path is correct
import { AiOutlineSetting } from "react-icons/ai";
import Logo from '../assets/logo.png'
class Navbar extends React.Component {
        static contextType = ThemeContext; // Define the contextType

    render() {
        const { isLightTheme,light ,dark ,toggleTheme} = this.context; // Access the theme context
        const theme = isLightTheme? light : dark
        console.log(theme)
     
        return (
            <div 
                style={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.primary.main,
                    padding: "10px",
                    fontSize: "20px"
                }}
            >   
                <nav className="h-10 flex align-bottom justify-between items-center">
                    <div className="logo flex">
                        <img src={Logo} alt="d" />
                        <h1 className="pl-3">SimpleCRM</h1>
                    </div>
                    <div className="options w-80 inline-flex flex-row justify-between items-center">
                        <a href="/"><AiOutlineSetting /></a>
                        <a href="/"><AiOutlineSetting /></a>
                        <button onClick={toggleTheme}><AiOutlineSetting /></button>
                        <div className="action">
                            <select name="" id="">
                                <option value="">Action</option>
                            </select>
                        </div>
                        <div className="action">
                            <select name="" id="">
                                <option value="">Profile</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

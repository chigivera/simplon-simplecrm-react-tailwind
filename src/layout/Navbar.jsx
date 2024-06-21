import React from "react";
import { ThemeContext } from "../context/ThemeContext"; // Ensure this import path is correct
import { AiOutlineSun,AiOutlineMoon,AiOutlinePlus} from "react-icons/ai";

import Logo from '../assets/logo.png'
import { Navigate } from "react-router-dom";
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
                    <div className="options w-auto inline-flex flex-row justify-between items-center">
                        <button onClick={toggleTheme}>{isLightTheme ? <AiOutlineSun/> : <AiOutlineMoon/> }</button>
                        <a href='/ajouterFacture' className="items-center flex ml-3 px-3 border-2 border-violet-400 bg-violet-400 hover:bg-white"><AiOutlinePlus className="mr-2"/>Creer Facture</a>
                        <div className="action mx-3">
                           Profile
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

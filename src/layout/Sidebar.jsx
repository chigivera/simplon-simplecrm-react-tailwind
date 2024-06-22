
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiTwotoneFileText } from "react-icons/ai";
import { AiTwotoneTags } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
class Sidebar extends React.Component {
    static contextType = ThemeContext; // Define the contextType
    render() {
        const { isLightTheme,light ,dark ,toggleTheme} = this.context; // Access the theme context
        const theme = isLightTheme? light : dark
        const sidebarList = [
            {
                path: '/',
                title: 'Dashboard',
                icon: <AiOutlineProject style={{fontSize:theme.typography.h3.fontSize}}/>

            },
            {
                path: '/factures',
                title: 'Factures',
                icon: <AiTwotoneFileText  style={{fontSize:theme.typography.h3.fontSize}}/>

            },
            {
                path: '/produits',
                title: 'Produits',
                icon: <AiTwotoneTags style={{fontSize:theme.typography.h3.fontSize}}/>

            },
            {
                path: '/clients',
                title: 'Clients',
                icon: <AiOutlineTeam style={{fontSize:theme.typography.h3.fontSize}}/>

            },
            {
                path: '/settings',
                title: 'Settings',
                icon: <AiOutlineSetting style={{fontSize:theme.typography.h3.fontSize}}/>

            },
        ]
        return (
            <div className="sidebar w-60 h-full flex flex-col min-h-screen" 
            style={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.main,
                padding: "10px",
                fontSize: "20px"
            }}
        >   
            <nav>
                {sidebarList.map((item,index)=>(
                <a key={index} href={item.path}>
                <div className="sidebar-link flex py-4 px-2 items-center hover:bg-violet-700 hover:text-neutral-50">
                {item.icon}
                <h1 className="pl-4" style={{fontSize:theme.typography.h3.fontSize}}>
                {item.title}
                </h1>
                </div>
                </a>
                ))}
               
            </nav>
            
            </div>
        )
    }
}
export default Sidebar
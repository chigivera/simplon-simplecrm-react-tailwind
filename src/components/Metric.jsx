import React, { Component } from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { ThemeContext } from '../context/ThemeContext';

export class Metric extends Component {
    static contextType = ThemeContext
  render() {
    const { isLightTheme,light ,dark } = this.context; // Access the theme context
    const theme = isLightTheme? light : dark
    const { title, icon, data, records } = this.props
    return (
        <div className="w-1/4 rounded-lg flex border-b-4 justify-between px-3 py-4 mx-3"
        style={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.primary.main
        }}
        >
        <div className="flex flex-col ">
            <h1>{title}</h1>
            <h1><b>{data}</b></h1>
            <span className="border-l-2 border-r-2 mt-3 px-3 rounded-lg w-fit" 
      style={{ borderColor: theme.palette.primary.main }}>{records} Records</span>
        </div>
        <div className="flex text-4xl"
        style={{
          color: theme.palette.secondary.main
        }}
        >
           {icon}
        </div>
    </div>
    )
  }
}

export default Metric
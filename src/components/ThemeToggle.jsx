import React, {Component} from 'React'
import { ThemeContext } from '../context/ThemeContext'

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() {
        const {toggleTheme} = this.context
        return(
            <button onClick={toggleTheme}>Toggle the Theme</button>
        )
    }
}

export default ThemeToggle
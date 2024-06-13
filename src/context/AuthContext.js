import React,{Component,createContext} from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }
    toggleAuth = () => {
        this.setState({
            isAuthenticated
        })
    }
    render() {
        return(
            <AuthContext.Provider value={{...this.state}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

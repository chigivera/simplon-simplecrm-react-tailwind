import React, { Component, createContext } from 'react';




const tokens = (mode) => ({
  ...(mode === "dark") ? {
cyan: {
          100: "#e8f4fa",
          200: "#d2eaf5",
          300: "#bbdff0",
          400: "#a5d5eb",
          500: "#8ecae6",
          600: "#72a2b8",
          700: "#55798a",
          800: "#39515c",
          900: "#1c282e"
},
violet: {
  100: "#e2d6fb",
  200: "#c5adf8",
  300: "#a783f4",
  400: "#8a5af1",
  500: "#6d31ed",
  600: "#5727be",
  700: "#411d8e",
  800: "#2c145f",
  900: "#160a2f"
},
  } : {
      cyan: {
          100: "#1c282e",
          200: "#39515c",
          300: "#55798a",
          400: "#72a2b8",
          500: "#8ecae6",
          600: "#a5d5eb",
          700: "#bbdff0",
          800: "#d2eaf5",
          900: "#e8f4fa"
},
violet: {
  100: "#160a2f",
  200: "#2c145f",
  300: "#411d8e",
  400: "#5727be",
  500: "#6d31ed",
  600: "#8a5af1",
  700: "#a783f4",
  800: "#c5adf8",
  900: "#e2d6fb"
  }
  }
})

const themeSettings = (mode) => {
const colors = tokens(mode);
return {
  palette: {
    mode: mode,
    ...(mode === "dark"
      ? {
          // palette values for dark mode
          primary: {
            main: colors.cyan[500],
          },
          secondary: {
            main: colors.violet[500],
          },
      
          background: {
            default: "#000000",
            primary:colors.violet[100],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.cyan[100],
          },
          secondary: {
            main: colors.violet[500],
          },
     
          background: {
            default: '#fcfcfc',
            primary: colors.cyan[100]
          },
        }),
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
};
};



export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props); // Call the parent class constructor
    this.state = {
      isLightTheme: true,
      light: themeSettings('light'),
      dark: themeSettings('dark')
    };
    // Bind 'this' to the toggleTheme method
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState(prevState => ({
      isLightTheme:!prevState.isLightTheme,
    }));
  }
  
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state,toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
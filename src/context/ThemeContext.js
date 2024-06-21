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
blue: {
    100: "#d3ecf2",
    200: "#a6d8e4",
    300: "#7ac5d7",
    400: "#4db1c9",
    500: "#219ebc",
    600: "#1a7e96",
    700: "#145f71",
    800: "#0d3f4b",
    900: "#072026"
},
sea: {
          100: "#ccd6da",
          200: "#9aacb5",
          300: "#678391",
          400: "#35596c",
          500: "#023047",
          600: "#022639",
          700: "#011d2b",
          800: "#01131c",
          900: "#000a0e"
},
yellow: {
    100: "#fff1cd",
    200: "#ffe29a",
    300: "#ffd468",
    400: "#ffc535",
    500: "#ffb703",
    600: "#cc9202",
    700: "#996e02",
    800: "#664901",
    900: "#332501"
},
orange: {
    100: "#fee7cc",
    200: "#fdce99",
    300: "#fdb666",
    400: "#fc9d33",
    500: "#fb8500",
    600: "#c96a00",
    700: "#975000",
    800: "#643500",
    900: "#321b00"
}
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
blue: {
    100: "#072026",
    200: "#0d3f4b",
    300: "#145f71",
    400: "#1a7e96",
    500: "#219ebc",
    600: "#4db1c9",
    700: "#7ac5d7",
    800: "#a6d8e4",
    900: "#d3ecf2",
},
sea: {
          100: "#000a0e",
          200: "#01131c",
          300: "#011d2b",
          400: "#022639",
          500: "#023047",
          600: "#35596c",
          700: "#678391",
          800: "#9aacb5",
          900: "#ccd6da",
},
yellow: {
    100: "#332501",
    200: "#664901",
    300: "#996e02",
    400: "#cc9202",
    500: "#ffb703",
    600: "#ffc535",
    700: "#ffd468",
    800: "#ffe29a",
    900: "#fff1cd",
},
orange: {
    100: "#321b00",
    200: "#643500",
    300: "#975000",
    400: "#c96a00",
    500: "#fb8500",
    600: "#fc9d33",
    700: "#fdb666",
    800: "#fdce99",
    900: "#fee7cc",
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
            main: colors.yellow[500],
          },
          neutral: {
            dark: colors.blue[700],
            main: colors.blue[500],
            light: colors.blue[100],
          },
          background: {
            default: "#000000",
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.cyan[100],
          },
          secondary: {
            main: colors.yellow[500],
          },
          neutral: {
            dark: colors.blue[700],
            main: colors.blue[500],
            light: colors.blue[100],
          },
          background: {
            default: '#fcfcfc',
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
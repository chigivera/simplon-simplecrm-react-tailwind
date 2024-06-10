import React from "react";
import {ThemeProvider} from "./context/themeContext"; // Ensure this import path is correct

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <h1>Hello World</h1>
        {/* Include other components that will consume the theme context */}
      </ThemeProvider>
    );
  }
}

export default App;
// Corrected themeContext.js

import React from 'react';
import { Theme } from '../theme'; // Ensure this import path is correct

// Create a context object
export const ThemeContext = React.createContext();

// Define a custom provider component
export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: new Theme('dark'), // Initialize with 'dark' theme
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <div style={{ backgroundColor: theme.getPalette().background.default }}>
          {this.props.children}
        </div>
      </ThemeContext.Provider>
    );
  }
}


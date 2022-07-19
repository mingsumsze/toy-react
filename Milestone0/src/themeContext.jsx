import React from "react";

// Create a theme context with 'light' as default val
// Default value is only used when a component does not have a matching Provider above it in the tree
const ThemeContext = React.createContext('light');

export default ThemeContext;
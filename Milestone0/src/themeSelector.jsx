import React, { useContext } from "react";
import Button from "./button";
import ThemeContext from "./themeContext";
import Theme from "./styles/theme";


// For how to update context value from consumer
// Provide the state setter function as the context and consumer can then use the setter function
// https://stackoverflow.com/questions/50502664/how-to-update-the-context-value-in-a-provider-from-the-consumer
function ThemeSelector(props) {
  // useContext hook for Context Provide
  const { contextTheme, setContextTheme } = useContext(ThemeContext);

  function handleClick() {
    if (contextTheme === 'light') {
      setContextTheme('dark');
    } else {
      setContextTheme('light');
    }
  }

  return (
    <Button handleClick={handleClick}>
      Theme: {contextTheme}
    </Button>
  );
}

export default ThemeSelector;
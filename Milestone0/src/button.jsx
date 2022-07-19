import React from "react";
import ButtonStyle from "./styles/button.styled";
import ThemeContext from "./themeContext";


function Button(props) {
  return (
    <ThemeContext.Consumer>
      {({theme, setTheme}) =>
        <ButtonStyle onClick={props.handleClick} theme={theme}>
          {props.children}
        </ButtonStyle>
      }
    </ThemeContext.Consumer>
  );
}

export default Button;
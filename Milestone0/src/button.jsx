import React from "react";
import ButtonStyle from "./styles/button.styled";
import ThemeContext from "./themeContext";


function Button(props) {
  return (
    <ThemeContext.Consumer>
      {({contextTheme}) =>
        <ButtonStyle onClick={props.handleClick} contextTheme={contextTheme}>
          {props.children}
        </ButtonStyle>
      }
    </ThemeContext.Consumer>
  );
}

export default Button;
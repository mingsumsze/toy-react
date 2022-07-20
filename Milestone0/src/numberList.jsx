import React from "react";
import ListStyle from "./styles/list.styled";
import ThemeContext from "./themeContext";


function NumberList(props) {
  const numbers = props.numbers;

  // Can also be directly embedded inside JSX expression
  // Key to help with efficient reconciliation
  // const listItems = numbers.map(number =>
  //   <li key={number.toString()}>
  //     {number}
  //   </li>
  // );
  return (
    // Context.Consumer (function component only)
    // Requires a function as a child
    // The function receives the current context value and returns a React node
    <ThemeContext.Consumer>
      {({contextTheme}) =>
        <ListStyle contextTheme={contextTheme}>
          {numbers.map(number => <li key={number.toString()}>{number}</li>)}
        </ListStyle>
      }
    </ThemeContext.Consumer>
  );
}


export default NumberList;
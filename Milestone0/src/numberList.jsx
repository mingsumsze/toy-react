import React from "react";


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
    <ul>
      {numbers.map(number =>
        <li key={number.toString()}>{number}</li>)}
    </ul>
  );
}


export default NumberList;
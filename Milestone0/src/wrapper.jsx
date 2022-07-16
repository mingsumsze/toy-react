import React from "react";

function Wrapper(props) {
  // return (
  //   <div>
  //     {props.children}
  //   </div>
  // )
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  )
}

export default Wrapper;
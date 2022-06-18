import React from "react";
import Clock from "./clock";
import Counter from "./counter";
import Form from "./form";
import WarningBanner from "./warningBanner";


function App({ name }) {
  return (
    <div>
      <Clock name={name}/>
      <Counter/>
      <Form/>
      <WarningBanner warn={true}/>
    </div>
  )
}


export default App;
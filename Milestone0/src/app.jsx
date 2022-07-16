import React from "react";
import Clock from "./clock";
import Counter from "./counter";
import Form from "./form";
import WarningBanner from "./warningBanner";
import NumberList from "./numberList";
import TemperatureConverter from "./temperatureConverter";
import Wrapper from "./wrapper";


function App({ name }) {
  // return (
  //   <Wrapper>
  //     <Clock name={name}/>
  //     <Counter/>
  //     <Form/>
  //     <WarningBanner warn={true}/>
  //     <NumberList numbers={[1, 2, 3, 4, 5]}/>
  //     <TemperatureConverter/>
  //   </Wrapper>
  // )
  return (
    <Wrapper
      left={
        <div>
          <Clock name={name}/>
          <Counter/>
          <Form/>
          <WarningBanner warn={true}/>
        </div>
      }
      right={
        <div>
          <NumberList numbers={[1, 2, 3, 4, 5]}/>
          <TemperatureConverter/>
        </div>
      }/> 
  )
}


export default App;
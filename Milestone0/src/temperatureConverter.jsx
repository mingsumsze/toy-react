import React, { useState } from "react";


function toC(temp) {
  return (temp - 32) * 5 / 9;
}

function toF(temp) {
  return (temp * 9 / 5) + 32;
}

function tryConvert(temp, convert) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


// For direct comparision on class component vs function component
// Clearly much less boilerplate for function component
// class TemperatureConverter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scale: "c",
//       temp: ""
//     };

//     this.handleCChange = this.handleCChange.bind(this);
//     this.handleFChange = this.handleFChange.bind(this);
//   }

//   handleCChange(temp) {
//     this.setState({
//       scale: "c",
//       temp: temp
//     });
//   }

//   handleFChange(temp) {
//     this.setState({
//       scale: "f",
//       temp: temp
//     });
//   }

//   render() {
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temp={this.state.scale === "f" ? tryConvert(this.state.temp, toC) : this.state.temp}
//           onTempChange={this.handleCChange}/>
//         <TemperatureInput
//           scale="f"
//           temp={this.state.scale === "c" ? tryConvert(this.state.temp, toF) : this.state.temp}
//           onTempChange={this.handleFChange}/>
//       </div>
//     );
//   }
// }


function TemperatureConverter(props) {
  const [scale, setScale] = useState("");
  const [temp, setTemp] = useState("");

  function handleCChange(temp) {
    setScale("c");
    setTemp(temp);
  }

  function handleFChange(temp) {
    setScale("f");
    setTemp(temp);
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temp={scale === "f" ? tryConvert(temp, toC) : temp}
        onTempChange={handleCChange}/>
      <TemperatureInput
        scale="f"
        temp={scale === "c" ? tryConvert(temp, toF) : temp}
        onTempChange={handleFChange}/>
    </div>
  );
}


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.scale}:</legend>
        <input value={this.props.temp} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}


export default TemperatureConverter;
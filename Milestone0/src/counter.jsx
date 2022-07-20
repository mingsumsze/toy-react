import React from "react";
import Button from "./button";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isToggleOn: false
    };

    // Class methods are not bound by default
    // "this" will be undefined during callback if not bound to current obj
    // Alternative solution: use arrow function (see below)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
      isToggleOn: !(prevState.isToggleOn)
    }));
  }

  render() {
    return (
      <Button handleClick={this.handleClick}>
        Counter: {this.state.count}
        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
      </Button>

      // Parsing arguments to event handler
      // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
      // <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    );
  }
}


export default Counter;
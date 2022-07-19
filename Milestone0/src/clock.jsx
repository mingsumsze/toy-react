import React from "react";
import ClockStyle from "./styles/clock.styled";
import ThemeContext from "./themeContext";


class Clock extends React.Component {
  // Public class field syntax
  // Assign a contextType to read the current theme context
  // Can only subscribe to a single context using this API
  // If you need to read more than one see Consuming Multiple Contexts
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    // State updates are merged. Other state variables do not have to be specified
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    // Store the scheduled function ID such that it can later be cleared
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // Clear the scheduled function
    clearInterval(this.timerID);
  }

  render() {
    return (
      <ClockStyle theme={this.context.theme}>
        <h1>Time: {this.state.date.toLocaleTimeString()}</h1>
      </ClockStyle>
    );
  }
}


export default Clock;
import React from "react";


class Clock extends React.Component {
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
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


export default Clock;
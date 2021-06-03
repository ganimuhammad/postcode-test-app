import React from "react";

class Loading extends React.Component {
  state = {
    text: "Loading",
  };

  componentDidMount() {
    const stopper = this.state.text + "...";

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState({ text: "Loading" })
        : this.setState((currentState) => {
            return {
              text: currentState.text + ".",
            };
          });
    }, 100);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.text}</p>;
  }
}

export default Loading;

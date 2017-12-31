import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text {...this.props}>{display}</Text>
    );
  }
}

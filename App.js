import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Blink from './components/Blink';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Blink text={this.state.text} style={styles.text} />
        <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={
          (text) => this.setState({text})
        }
        value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FFF33',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  }
});

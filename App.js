import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.reacticon}
          source={require('./images/reacticon.png')}
        />
        <Text style={styles.welcome}>Örnek uygulamamıza hoş geldiniz.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  reacticon:{
    alignSelf: 'center',
    height: 200,
    width: 200,
  }
});

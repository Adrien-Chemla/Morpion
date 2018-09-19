import React from 'react';
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

class Apropos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../img/vegeta.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  }
});

export default Apropos
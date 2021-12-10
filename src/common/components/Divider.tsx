import React from 'react';
import {StyleSheet, View} from 'react-native';

function Divider() {
  return <View style={styles.main} />;
}

const styles = StyleSheet.create({
  main: {
    height: 0.7,
    backgroundColor: '#e3e3e3',
  },
});

export default Divider;

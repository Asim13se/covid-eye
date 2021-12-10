import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
};

function TextButton(props: Props) {
  return (
    <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#0645AD',
    fontSize: 18,
  },
  touchable: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default TextButton;

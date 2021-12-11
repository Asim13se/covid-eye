import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  indicatorColor: string;
};

function Indicator(props: Props) {
  return (
    <View
      style={[styles.indicatorView, {backgroundColor: props.indicatorColor}]}
    />
  );
}

const styles = StyleSheet.create({
  indicatorView: {
    borderRadius: 2,
    width: 14,
    height: 14,
    marginEnd: 10,
  },
});

export default Indicator;

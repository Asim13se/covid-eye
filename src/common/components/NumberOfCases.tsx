import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LightTextStyle from '../styling/LightTextStyle';
import Colors from '../styling/Colors';

export type NumberOfCasesProps = {
  title: string;
  content: string;
  indicatorColor: string;
};

function NumberOfCases(props: NumberOfCasesProps) {
  return (
    <View>
      <View style={styles.titleRow}>
        {props.indicatorColor ? (
          <View
            style={[
              styles.indicatorView,
              {backgroundColor: props.indicatorColor},
            ]}
          />
        ) : null}
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <Text style={styles.contentText}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  indicatorView: {
    borderRadius: 2,
    width: 14,
    height: 14,
    marginEnd: 10,
  },
  titleText: {
    ...LightTextStyle,
    textAlign: 'center',
  },
  contentText: {
    color: Colors.text1,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default NumberOfCases;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LightTextStyle from '../styling/LightTextStyle';
import Colors from '../styling/Colors';
import Indicator from './Indicator';
import PrimaryFontFamily from '../styling/PrimaryFontFamily';

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
          <Indicator indicatorColor={props.indicatorColor} />
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
  titleText: {
    ...LightTextStyle,
    textAlign: 'center',
  },
  contentText: {
    color: Colors.text1,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: PrimaryFontFamily,
  },
});

export default NumberOfCases;

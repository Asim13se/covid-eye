import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LightTextStyle from '../../../../common/styling/LightTextStyle';
import Colors from '../../../../common/styling/Colors';
import PrimaryFontFamily from '../../../../common/styling/PrimaryFontFamily';

type Props = {
  title: string;
  content: string;
  indicatorColor: string;
};

function StatisticsPercentage(props: Props) {
  return (
    <View>
      <View style={styles.row}>
        <View
          style={[styles.indicator, {backgroundColor: props.indicatorColor}]}
        />
        <View style={styles.titleAndContentView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.contentText}>{props.content}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 20,
    height: 8,
    borderRadius: 10,
    marginEnd: 10,
  },
  titleText: {
    ...LightTextStyle,
  },
  contentText: {
    fontSize: 16,
    color: Colors.text1,
    fontWeight: '600',
    marginTop: 5,
    fontFamily: PrimaryFontFamily,
  },
  titleAndContentView: {
    marginTop: 25,
  },
});

export default StatisticsPercentage;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import LightTextStyle from '../../../../common/styling/LightTextStyle';
import Colors from '../../../../common/styling/Colors';
import NumberOfCases, {
  NumberOfCasesProps,
} from '../../../../common/components/NumberOfCases';

type Props = NumberOfCasesProps & {};

function StatisticsBox(props: Props) {
  return (
    <View style={styles.main}>
      <NumberOfCases
        title={props.title}
        content={props.content}
        indicatorColor={props.indicatorColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: 150,
    borderWidth: 1,
    borderColor: '#e8ebed',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignSelf: 'flex-start',
  },
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

export default StatisticsBox;

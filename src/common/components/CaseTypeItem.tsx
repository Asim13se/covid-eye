import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Indicator from './Indicator';

type Props = {
  caseType: string;
  indicatorColor: string;
};

function CaseTypeItem(props: Props) {
  return (
    <View style={styles.item}>
      <Indicator indicatorColor={props.indicatorColor} />
      <Text>{props.caseType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default CaseTypeItem;

import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';

type Props = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof ReportCasePageRouteName
>;

function ReportCasePage(props: Props) {
  return <View />;
}

export const ReportCasePageRouteName = 'ReportCasePage';
export default ReportCasePage;

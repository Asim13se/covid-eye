import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';

type Props = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof CountriesListPageRouteName
>;

function CountriesListPage(props: Props) {
  return <View />;
}

export const CountriesListPageRouteName = 'CountriesListPage';
export default CountriesListPage;

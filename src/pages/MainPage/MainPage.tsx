import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';

export type MainPageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof MainPageRouteName
>;

function MainPage(props: MainPageProps) {
  return <View />;
}

export const MainPageRouteName = 'MainPage';
export default MainPage;

import {NativeStackNavigationOptionsFunction} from '../../navigation/types/NativeStackNavigationOptionsFunction';
import {ReportCasePageRouteName} from '../ReportCasePage/ReportCasePage';
import ReportCaseButton from './components/ReportCaseButton';
import React from 'react';
import {MainPageProps} from './MainPage';

export const MainPageRouteOptions: NativeStackNavigationOptionsFunction<
  MainPageProps
> = ({navigation}) => {
  const handlePressRightButton = () => {
    navigation.navigate(ReportCasePageRouteName);
  };
  return {
    title: 'COVID Eye',
    headerRight: () => <ReportCaseButton onPress={handlePressRightButton} />,
  };
};

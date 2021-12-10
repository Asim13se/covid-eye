import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage, {MainPageRouteName} from '../../pages/MainPage/MainPage';
import CountriesListPage, {
  CountriesListPageRouteName,
} from '../../pages/CountriesListPage/CountriesListPage';
import ReportCasePage, {
  ReportCasePageRouteName,
} from '../../pages/ReportCasePage/ReportCasePage';
import {MainStackParamList} from '../types/MainStackParamList';
import {MainPageRouteOptions} from '../../pages/MainPage/MainPageRouteOptions';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName={MainPageRouteName}>
      <Stack.Screen
        name={MainPageRouteName}
        component={MainPage}
        options={MainPageRouteOptions}
      />
      <Stack.Screen
        name={CountriesListPageRouteName}
        component={CountriesListPage}
      />
      <Stack.Screen name={ReportCasePageRouteName} component={ReportCasePage} />
    </Stack.Navigator>
  );
}

export default MainNavigator;

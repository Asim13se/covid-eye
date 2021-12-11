import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';
import CountryCasesList from './components/CountryCasesList';
import {useQuery} from 'react-query';
import fetchCovid19Summary from '../../common/utils/fetchCovid19Summary';
import Colors from '../../common/styling/Colors';

export type CountriesListPageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof CountriesListPageRouteName
>;

function CountriesListPage(props: CountriesListPageProps) {
  const {data, isLoading} = useQuery('covid19-summary', fetchCovid19Summary);
  return (
    <View style={styles.root}>
      <CountryCasesList
        countryCasesList={data?.Countries}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.screenBackgroundColor,
  },
});

export const CountriesListPageRouteName = 'CountriesListPage';
export default CountriesListPage;

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';
import GlobalCasesStatisticsCard from './components/GlobalCasesStatisticsCard/GlobalCasesStatisticsCard';
import Colors from '../../common/styling/Colors';
import TopInfectedCountriesCard from './components/TopInfectedCountriesCard/TopInfectedCountriesCard';
import Spacer from '../../common/components/Spacer';
import {useQuery} from 'react-query';
import fetchCovid19Summary from '../../common/utils/fetchCovid19Summary';

export type MainPageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof MainPageRouteName
>;

function MainPage(props: MainPageProps) {
  const {data, isLoading} = useQuery('covid19-summary', fetchCovid19Summary);
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.contentContainerStyle}>
      <GlobalCasesStatisticsCard
        globalCasesSummary={data?.Global}
        isLoading={isLoading}
      />
      <Spacer height={30} />
      <TopInfectedCountriesCard
        isLoading={isLoading}
        countryCasesList={data?.Countries}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.screenBackgroundColor,
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 45,
  },
});

export const MainPageRouteName = 'MainPage';
export default MainPage;

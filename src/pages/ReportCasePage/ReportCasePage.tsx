import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types/MainStackParamList';
import TypeOfCaseField from './components/TypeOfCaseField';
import useReportCaseStore from './stores/useReportCaseStore';
import Colors from '../../common/styling/Colors';
import CountryField from './components/CountryField';
import Spacer from '../../common/components/Spacer';
import ReportButton from './components/ReportButton';

export type ReportCasePageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof ReportCasePageRouteName
>;

function ReportCasePage(props: ReportCasePageProps) {
  useEffect(() => {
    return () => {
      useReportCaseStore.getState().resetStore();
    };
  }, []);
  return (
    <View style={styles.root}>
      <CountryField
        selectedCountry={useReportCaseStore().selectedCountry}
        setSelectedCountry={useReportCaseStore().setSelectedCountry}
      />
      <Spacer height={30} />
      <TypeOfCaseField
        selectedCaseType={useReportCaseStore().selectedCaseType}
        onSelectedCaseTypeChanged={useReportCaseStore().setSelectedCase}
      />
      <Spacer height={40} />
      <ReportButton onPress={useReportCaseStore().submitCase} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.screenBackgroundColor,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
});

export const ReportCasePageRouteName = 'ReportCasePage';
export default ReportCasePage;

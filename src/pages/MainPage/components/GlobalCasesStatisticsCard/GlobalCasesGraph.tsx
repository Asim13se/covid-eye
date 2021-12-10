import React from 'react';
import {StyleSheet, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import Colors from '../../../../common/styling/Colors';
import StatisticsPercentage from './StatisticsPercentage';
import {GlobalCasesSummary} from '../../../../common/types/GlobalCasesSummary';

type Props = {
  globalCasesSummary: GlobalCasesSummary;
};

const sliceColor = [Colors.confirmedCase, Colors.deathCase];

function GlobalCasesGraph(props: Props) {
  const {TotalConfirmed, TotalDeaths} = props.globalCasesSummary;
  const totalCases = TotalConfirmed + TotalDeaths;
  const series = [TotalConfirmed, TotalDeaths];
  const calculatePercentage = (cases: number) =>
    Math.round((cases / totalCases) * 100);
  return (
    <View style={styles.main}>
      <PieChart
        widthAndHeight={180}
        series={series}
        sliceColor={sliceColor}
        doughnut
      />
      <View>
        <StatisticsPercentage
          title={'Confirmed'}
          content={`${calculatePercentage(TotalConfirmed)}%`}
          indicatorColor={Colors.confirmedCase}
        />
        <StatisticsPercentage
          title={'Death'}
          content={`${calculatePercentage(TotalDeaths)}%`}
          indicatorColor={Colors.deathCase}
        />
        <StatisticsPercentage
          title={'Recovered'}
          content={'N/A'}
          indicatorColor={Colors.recoveredCase}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GlobalCasesGraph;

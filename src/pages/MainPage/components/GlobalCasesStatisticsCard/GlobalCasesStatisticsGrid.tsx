import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatisticsBox from './StatisticsBox';
import Colors from '../../../../common/styling/Colors';
import {GlobalCasesSummary} from '../../../../common/types/GlobalCasesSummary';
import formatNumberOfCases from '../../../../common/utils/formatNumberOfCases';
import Spacer from '../../../../common/components/Spacer';

type Props = {
  globalCasesSummary: GlobalCasesSummary;
};

function GlobalCasesStatisticsGrid({globalCasesSummary}: Props) {
  return (
    <View style={styles.grid}>
      <StatisticsBox
        title={'Confirmed'}
        content={formatNumberOfCases({
          newCases: globalCasesSummary.NewConfirmed,
          totalCases: globalCasesSummary.TotalConfirmed,
        })}
        indicatorColor={Colors.confirmedCase}
      />
      <Spacer width={10} />
      <StatisticsBox
        title={'Death'}
        content={formatNumberOfCases({
          newCases: globalCasesSummary.NewDeaths,
          totalCases: globalCasesSummary.TotalDeaths,
        })}
        indicatorColor={Colors.deathCase}
      />
      <View style={styles.gridItem}>
        <StatisticsBox
          title={'Recovered'}
          content={'N/A'}
          indicatorColor={Colors.recoveredCase}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    marginTop: 10,
  },
});

export default GlobalCasesStatisticsGrid;

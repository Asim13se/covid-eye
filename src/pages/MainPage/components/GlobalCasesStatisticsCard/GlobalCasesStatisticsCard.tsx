import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import CardStyle from '../../../../common/styling/CardStyle';
import GlobalCasesStatisticsGrid from './GlobalCasesStatisticsGrid';
import GlobalCasesGraph from './GlobalCasesGraph';
import CardHeaderStyle from '../../../../common/styling/CardHeaderStyle';
import Spacer from '../../../../common/components/Spacer';
import {GlobalCasesSummary} from '../../../../common/types/GlobalCasesSummary';

type Props = {
  globalCasesSummary?: GlobalCasesSummary;
  isLoading: boolean;
};

function GlobalCasesStatisticsCard(props: Props) {
  return (
    <View>
      <Text style={styles.headerText}>{'COVID-19 global cases  🌍'}</Text>
      <View style={styles.main}>
        {props.isLoading ? <ActivityIndicator /> : null}
        {props.isLoading ? null : (
          <>
            <GlobalCasesGraph globalCasesSummary={props.globalCasesSummary!} />
            <Spacer height={30} />
            <GlobalCasesStatisticsGrid
              globalCasesSummary={props.globalCasesSummary!}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    ...CardStyle,
  },
  headerText: {
    ...CardHeaderStyle,
    marginBottom: 10,
  },
});

export default GlobalCasesStatisticsCard;

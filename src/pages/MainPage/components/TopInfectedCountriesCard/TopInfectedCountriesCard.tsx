import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import CardStyle from '../../../../common/styling/CardStyle';
import CardHeaderStyle from '../../../../common/styling/CardHeaderStyle';
import {CountryCases} from '../../../../common/types/CountryCases';
import SeeMoreButton from './SeeMoreButton';
import Spacer from '../../../../common/components/Spacer';
import TopInfectedCountriesList from './TopInfectedCountriesList';

type Props = {
  countryCasesList?: CountryCases[];
  isLoading: boolean;
};

function TopInfectedCountriesCard(props: Props) {
  return (
    <View>
      <Text style={styles.headerText}>
        {'Top 5 countries in Covid-19 cases'}
      </Text>
      <View style={styles.main}>
        {props.isLoading ? <ActivityIndicator /> : null}
        {props.isLoading ? null : (
          <>
            <TopInfectedCountriesList
              topN={5}
              countryCasesList={props.countryCasesList}
            />
            <Spacer height={35} />
            <View style={styles.seeMoreButton}>
              <SeeMoreButton />
            </View>
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
  seeMoreButton: {
    alignSelf: 'center',
  },
});

export default TopInfectedCountriesCard;

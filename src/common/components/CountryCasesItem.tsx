import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {CountryCases} from '../types/CountryCases';
import NumberOfCases from './NumberOfCases';
import Colors from '../styling/Colors';
import formatNumberOfCases from '../utils/formatNumberOfCases';
import PrimaryFontFamily from '../styling/PrimaryFontFamily';

type Props = {
  countryCases: CountryCases;
};

function CountryCasesItem(props: Props) {
  return (
    <View>
      <View style={styles.countryRow}>
        <CountryFlag isoCode={props.countryCases.CountryCode} size={16} />
        <Text style={styles.countryText}>{props.countryCases.Country}</Text>
      </View>
      <View style={styles.row}>
        <NumberOfCases
          title={'Confirmed'}
          content={formatNumberOfCases({
            newCases: props.countryCases.NewConfirmed,
            totalCases: props.countryCases.TotalConfirmed,
          })}
          indicatorColor={Colors.confirmedCase}
        />
        <NumberOfCases
          title={'Death'}
          content={formatNumberOfCases({
            newCases: props.countryCases.NewDeaths,
            totalCases: props.countryCases.TotalDeaths,
          })}
          indicatorColor={Colors.deathCase}
        />
        <NumberOfCases
          title={'Recovered'}
          content={'N/A'}
          indicatorColor={Colors.recoveredCase}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  countryText: {
    fontSize: 16,
    fontWeight: '600',
    marginStart: 10,
    color: Colors.text1,
    fontFamily: PrimaryFontFamily,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CountryCasesItem;

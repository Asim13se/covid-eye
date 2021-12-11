import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {CountryCases} from '../../../common/types/CountryCases';
import CountryCasesItemSeparator from '../../../common/components/CountryCasesItemSeparator';
import CountriesSearchBar from './CountriesSearchBar';
import useCountryListStore from '../stores/useCountryListStore';
import renderCountryCasesListItem from './renderCountryCasesListItem';
import SortCountries from './SortCountries';

type Props = {
  countryCasesList?: CountryCases[];
  isLoading: boolean;
};

function CountryCasesList(props: Props) {
  useEffect(() => {
    if (props.countryCasesList) {
      const countryListStore = useCountryListStore.getState();
      countryListStore.setOriginalCountryList(props.countryCasesList);
      countryListStore.setCountryListForView(props.countryCasesList);
    }
  }, [props.countryCasesList]);

  useEffect(() => {
    return () => {
      useCountryListStore.getState().resetStore();
    };
  }, []);
  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator size={'large'} style={styles.loading} />
      ) : null}
      <View style={styles.searchBarRow}>
        <CountriesSearchBar
          text={useCountryListStore().searchTerm}
          onChangeText={useCountryListStore().setSearchTerm}
          style={styles.searchBar}
        />
        <SortCountries
          sortBy={useCountryListStore().sortBy}
          onSortSelectionChange={useCountryListStore().setSortBy}
        />
      </View>
      <FlatList
        ItemSeparatorComponent={CountryCasesItemSeparator}
        renderItem={input => renderCountryCasesListItem(input)}
        data={useCountryListStore().countryListForView}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 40,
  },
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 25,
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 25,
  },
  searchBar: {
    flex: 1,
    marginEnd: 20,
  },
});

export default CountryCasesList;

import React from 'react';
import {FlatList} from 'react-native';
import {CountryCases} from '../types/CountryCases';
import CountryCasesItem from './CountryCasesItem';
import CountryCasesItemSeparator from './CountryCasesItemSeparator';

type Props = {
  countryCasesList: CountryCases[];
};

function CountryCasesList(props: Props) {
  const renderItem = ({item}: {item: CountryCases; index: number}) => {
    return <CountryCasesItem countryCases={item} />;
  };
  return (
    <FlatList
      ItemSeparatorComponent={CountryCasesItemSeparator}
      renderItem={renderItem}
      data={props.countryCasesList}
    />
  );
}

export default CountryCasesList;

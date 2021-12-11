import React from 'react';
import {View} from 'react-native';
import CountryCasesItem from '../../../../common/components/CountryCasesItem';
import CountryCasesItemSeparator from '../../../../common/components/CountryCasesItemSeparator';
import {CountryCases} from '../../../../common/types/CountryCases';

type Props = {
  countryCasesList?: CountryCases[];
  topN: number;
};

function TopInfectedCountriesList(props: Props) {
  const topInfectedCountries = [...(props.countryCasesList || [])]
    ?.sort((a, b) => (a.TotalConfirmed >= b.TotalConfirmed ? -1 : 1))
    .slice(0, props.topN);
  return (
    <View>
      {topInfectedCountries?.map((countryCases, index) => {
        const isLastItem = index === topInfectedCountries.length - 1;
        return (
          <View key={countryCases.ID}>
            <CountryCasesItem countryCases={countryCases} />
            {isLastItem ? null : <CountryCasesItemSeparator />}
          </View>
        );
      })}
    </View>
  );
}

export default TopInfectedCountriesList;

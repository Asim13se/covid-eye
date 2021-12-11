import React from 'react';
import {CountryCases} from '../../../common/types/CountryCases';
import CountryCasesItem from '../../../common/components/CountryCasesItem';

const renderCountryCasesListItem = ({
  item,
}: {
  item: CountryCases;
  index: number;
}) => {
  return <CountryCasesItem countryCases={item} />;
};

export default renderCountryCasesListItem;

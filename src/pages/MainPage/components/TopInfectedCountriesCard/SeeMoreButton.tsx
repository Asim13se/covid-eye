import React from 'react';
import {useNavigation} from '@react-navigation/native';
import TextButton from '../../../../common/components/TextButton';
import {CountriesListPageRouteName} from '../../../CountriesListPage/CountriesListPage';

function SeeMoreButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(CountriesListPageRouteName as any);
  };
  return <TextButton onPress={handlePress} text={'See more'} />;
}

export default SeeMoreButton;

import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import Field from '../../../common/components/Field';
import {Country} from 'react-native-country-picker-modal/lib/types';

type Props = {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
};

function CountryField(props: Props) {
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const handlePress = () => {
    setIsCountryPickerVisible(true);
  };
  const handleCloseCountryPicker = () => {
    setIsCountryPickerVisible(false);
  };
  const handleSelectCountry = (country: Country) => {
    props.setSelectedCountry(country);
  };
  const renderSelectedItem = () => {
    return null;
  };
  return (
    <Field
      label={'Country'}
      onPress={handlePress}
      selectedItem={props.selectedCountry}
      placeholder={'Select country...'}
      renderSelected={renderSelectedItem}>
      <CountryPicker
        countryCode={props.selectedCountry?.cca2 || 'AF'}
        visible={isCountryPickerVisible}
        onClose={handleCloseCountryPicker}
        onSelect={handleSelectCountry}
        withCountryNameButton
        withFilter
        // workaround to hide the library's placeholder
        renderFlagButton={props.selectedCountry ? undefined : () => null}
      />
    </Field>
  );
}

export default CountryField;

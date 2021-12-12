import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Menu, MenuItem} from 'react-native-material-menu';
import Colors from '../../../common/styling/Colors';
import {SortCountriesBy} from '../../../common/types/SortCountriesBy';
import CaseTypeMenuItem from '../../../common/components/CaseTypeMenuItem';

type Props = {
  sortBy: SortCountriesBy;
  onSortSelectionChange: (sortBy: SortCountriesBy) => void;
};

function SortCountries(props: Props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const showMenu = () => setIsMenuVisible(true);
  const hideMenu = () => setIsMenuVisible(false);
  const handlePressSortIcon = () => {
    showMenu();
  };
  const handlePressSortByConfirmed = () => {
    props.onSortSelectionChange('confirmed');
    hideMenu();
  };
  const handlePressSortByDeath = () => {
    props.onSortSelectionChange('death');
    hideMenu();
  };
  const handlePressSortByRecovered = () => {
    props.onSortSelectionChange('recovered');
    hideMenu();
  };
  const handlePressSortByName = () => {
    props.onSortSelectionChange('name');
    hideMenu();
  };
  return (
    <Menu
      visible={isMenuVisible}
      anchor={
        <TouchableOpacity onPress={handlePressSortIcon}>
          <Icon name={'sort'} size={22} color={Colors.iconColor} />
        </TouchableOpacity>
      }
      onRequestClose={hideMenu}>
      <CaseTypeMenuItem
        onPress={handlePressSortByConfirmed}
        indicatorColor={Colors.confirmedCase}
        caseType={'Confirmed'}
      />
      <CaseTypeMenuItem
        onPress={handlePressSortByDeath}
        indicatorColor={Colors.deathCase}
        caseType={'Death'}
      />
      <CaseTypeMenuItem
        onPress={handlePressSortByRecovered}
        indicatorColor={Colors.recoveredCase}
        caseType={'Recovered'}
      />
      <MenuItem onPress={handlePressSortByName}>
        <View style={styles.item}>
          <Text>{'Name'}</Text>
        </View>
      </MenuItem>
    </Menu>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default SortCountries;

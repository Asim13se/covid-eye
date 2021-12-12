import React, {useState} from 'react';
import Field from '../../../common/components/Field';
import Colors from '../../../common/styling/Colors';
import {Menu} from 'react-native-material-menu';
import CaseTypeMenuItem from '../../../common/components/CaseTypeMenuItem';
import {TypeOfCase} from '../../../common/types/TypeOfCase';
import CaseTypeItem from '../../../common/components/CaseTypeItem';
import caseTypeToIndicatorColorMap from '../../../common/styling/caseTypeToIndicatorColorMap';

type Props = {
  selectedCaseType: TypeOfCase | null;
  onSelectedCaseTypeChanged: (typeCase: TypeOfCase) => void;
};

function TypeOfCaseField(props: Props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const showMenu = () => setIsMenuVisible(true);
  const hideMenu = () => setIsMenuVisible(false);

  const handlePress = () => {
    showMenu();
  };
  const renderSelectedItem = () => {
    return (
      <CaseTypeItem
        caseType={props.selectedCaseType!}
        indicatorColor={caseTypeToIndicatorColorMap[props.selectedCaseType!]}
      />
    );
  };
  const handlePressSortByConfirmed = () => {
    props.onSelectedCaseTypeChanged('confirmed');
    hideMenu();
  };
  const handlePressSortByDeath = () => {
    props.onSelectedCaseTypeChanged('death');
    hideMenu();
  };
  const handlePressSortByRecovered = () => {
    props.onSelectedCaseTypeChanged('recovered');
    hideMenu();
  };
  return (
    <Menu
      visible={isMenuVisible}
      anchor={
        <Field
          label={'Type of case'}
          onPress={handlePress}
          placeholder={'Select type of case...'}
          renderSelected={renderSelectedItem}
          selectedItem={props.selectedCaseType}
        />
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
    </Menu>
  );
}

export default TypeOfCaseField;

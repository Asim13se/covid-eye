import React from 'react';
import {MenuItem} from 'react-native-material-menu';
import CaseTypeItem from './CaseTypeItem';

type Props = {
  onPress: () => void;
  caseType: string;
  indicatorColor: string;
};

function CaseTypeMenuItem(props: Props) {
  return (
    <MenuItem onPress={props.onPress}>
      <CaseTypeItem
        caseType={props.caseType}
        indicatorColor={props.indicatorColor}
      />
    </MenuItem>
  );
}

export default CaseTypeMenuItem;

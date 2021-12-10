import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

function ReportCaseButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name={'eye-plus-outline'} size={24} />
    </TouchableOpacity>
  );
}

export default ReportCaseButton;

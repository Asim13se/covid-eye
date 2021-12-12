import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../common/styling/Colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  onPress: () => Promise<boolean>;
};

function ReportButton(props: Props) {
  const navigation = useNavigation();
  const handlePress = async () => {
    const isSuccess = await props.onPress();
    if (isSuccess) {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.button}>
      <Text style={styles.buttonText}>{'Report'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ReportButton;

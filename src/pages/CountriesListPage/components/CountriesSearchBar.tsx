import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Colors from '../../../common/styling/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryFontFamily from '../../../common/styling/PrimaryFontFamily';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
};

function CountriesSearchBar(props: Props) {
  return (
    <View style={props.style}>
      <View>
        <Icon
          style={styles.searchIcon}
          name={'magnify'}
          color={Colors.iconColor}
          size={22}
        />
        <TextInput
          style={styles.textInput}
          value={props.text}
          onChangeText={props.onChangeText}
          placeholder={'Search...'}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.cardBackgroundColor,
    borderWidth: 1,
    borderColor: '#e6e5e5',
    paddingVertical: 12,
    paddingStart: 45,
    paddingEnd: 8,
    elevation: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    fontFamily: PrimaryFontFamily,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    bottom: 0,
    start: 15,
    zIndex: 2,
  },
});

export default CountriesSearchBar;

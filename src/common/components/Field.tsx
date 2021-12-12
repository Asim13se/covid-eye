import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styling/Colors';
import LightTextStyle from '../styling/LightTextStyle';

type Props<T> = {
  label: string;
  onPress: () => void;
  selectedItem?: T;
  renderSelected: () => ReactNode;
  placeholder?: string;
  children?: ReactNode;
};

function Field<T>(props: Props<T>) {
  return (
    <View>
      <Text style={styles.labelText}>{props.label}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.field}
        onPress={props.onPress}>
        <View style={styles.row}>
          <View style={styles.flex}>
            {props.children}
            {props.selectedItem ? props.renderSelected() : null}
            {props.selectedItem ? null : (
              <Text style={styles.placeholderText}>
                {props.placeholder || 'Select...'}
              </Text>
            )}
          </View>
          <Icon name={'chevron-down'} size={24} color={Colors.iconColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  labelText: {
    color: Colors.text1,
    fontSize: 16,
    marginBottom: 10,
  },
  field: {
    backgroundColor: '#f1f2f5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingStart: 10,
    paddingEnd: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  placeholderText: {
    ...LightTextStyle,
  },
});

export default Field;

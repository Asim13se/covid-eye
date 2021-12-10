import {ViewStyle} from 'react-native';
import Colors from './Colors';

const CardStyle: ViewStyle = {
  backgroundColor: Colors.cardBackgroundColor,
  elevation: 2,
  borderRadius: 10,
  paddingHorizontal: 20,
  paddingVertical: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
};

export default CardStyle;

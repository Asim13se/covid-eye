import Colors from './Colors';
import PrimaryFontFamily from './PrimaryFontFamily';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack/src/types';

const MainNavigatorScreenOptions: NativeStackNavigationOptions = {
  headerTintColor: Colors.primary,
  headerTitleStyle: {
    fontWeight: '600',
    fontFamily: PrimaryFontFamily,
    color: Colors.text1,
  },
};

export default MainNavigatorScreenOptions;

import {NativeStackNavigationOptionsFunction} from '../../navigation/types/NativeStackNavigationOptionsFunction';
import {CountriesListPageProps} from './CountriesListPage';

const CountriesListPageRouteOptions: NativeStackNavigationOptionsFunction<
  CountriesListPageProps
> = () => {
  return {
    title: 'Countries List',
  };
};

export default CountriesListPageRouteOptions;

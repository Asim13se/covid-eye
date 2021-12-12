import {NativeStackNavigationOptionsFunction} from '../../navigation/types/NativeStackNavigationOptionsFunction';
import {ReportCasePageProps} from './ReportCasePage';

const ReportCaseRouteOptions: NativeStackNavigationOptionsFunction<
  ReportCasePageProps
> = () => {
  return {
    title: 'Report case',
  };
};

export default ReportCaseRouteOptions;

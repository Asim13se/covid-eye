import {CountryCases} from './CountryCases';
import {GlobalCasesSummary} from './GlobalCasesSummary';

export type Covid19APISummaryResponse = {
  Countries: CountryCases[];
  Global: GlobalCasesSummary;
};

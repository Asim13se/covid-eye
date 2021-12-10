import axios, {AxiosResponse} from 'axios';
import {Covid19APISummaryResponse} from '../types/Covid19APISummaryResponse';

export default async function fetchCovid19Summary(): Promise<Covid19APISummaryResponse> {
  const res = await axios.get<any, AxiosResponse<Covid19APISummaryResponse>>(
    'https://api.covid19api.com/summary',
  );
  return res.data;
}

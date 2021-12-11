import create from 'zustand';
import {CountryCases} from '../../../common/types/CountryCases';
import {SortCountriesBy} from '../../../common/types/SortCountriesBy';

type CountryListStore = {
  originalCountryList: CountryCases[];
  countryListForView: CountryCases[];
  searchTerm: string;
  sortBy: SortCountriesBy;
  setSortBy: (sortBy: SortCountriesBy) => void;
  setSearchTerm: (searchTerm: string) => void;
  sortCountryList: (
    sortBy: SortCountriesBy,
    countryList: CountryCases[],
  ) => CountryCases[];
  setOriginalCountryList: (countryList: CountryCases[]) => void;
  setCountryListForView: (countryList: CountryCases[]) => void;
  filterCountryListBySearchTerm: (
    searchTerm: string,
    countryList: CountryCases[],
  ) => CountryCases[];
  resetStore: () => void;
};

const useCountryListStore = create<CountryListStore>((set, get) => ({
  originalCountryList: [],
  countryListForView: [],
  searchTerm: '',
  sortBy: 'name',
  setSortBy: sortBy => {
    set({sortBy});
    get().setCountryListForView(get().originalCountryList);
  },
  setSearchTerm: (searchTerm: string) => {
    set({searchTerm});
    get().setCountryListForView(get().originalCountryList);
  },
  sortCountryList: (sortBy, countryList) => {
    const sortKeys: {[key in SortCountriesBy]: keyof CountryCases} = {
      confirmed: 'TotalConfirmed',
      death: 'TotalDeaths',
      recovered: 'TotalRecovered',
      name: 'Country',
    };
    return countryList.sort((a, b) => {
      if (sortBy === 'name') {
        return a[sortKeys[sortBy]] >= b[sortKeys[sortBy]] ? 1 : -1;
      }
      return a[sortKeys[sortBy]] >= b[sortKeys[sortBy]] ? -1 : 1;
    });
  },
  setOriginalCountryList: countryList =>
    set({originalCountryList: countryList}),
  setCountryListForView: countryList => {
    const countryListForViewSorted = get().sortCountryList(
      get().sortBy,
      countryList,
    );
    const countryListForViewFiltered = get().filterCountryListBySearchTerm(
      get().searchTerm,
      countryListForViewSorted,
    );
    set({countryListForView: countryListForViewFiltered});
  },
  filterCountryListBySearchTerm: (searchTerm, countryList) => {
    if (searchTerm === '') {
      return countryList;
    }
    return countryList.filter(country =>
      country.Country.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
  resetStore: () => {
    get().setSearchTerm('');
    get().setSortBy('name');
    get().setOriginalCountryList([]);
    get().setCountryListForView([]);
  },
}));

export default useCountryListStore;

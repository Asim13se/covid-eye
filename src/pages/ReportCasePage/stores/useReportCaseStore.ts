import {TypeOfCase} from '../../../common/types/TypeOfCase';
import create from 'zustand';
import {Country} from 'react-native-country-picker-modal/lib/types';

type CaseReport = {
  country: Country;
  caseType: TypeOfCase;
};

export type ReportCaseStore = {
  selectedCountry: Country | null;
  selectedCaseType: TypeOfCase | null;
  setSelectedCountry: (country: Country | null) => void;
  setSelectedCase: (typeOfCase: TypeOfCase | null) => void;
  submitCase: () => Promise<boolean>;
  resetStore: () => void;
};

const useReportCaseStore = create<ReportCaseStore>((set, get) => ({
  selectedCountry: null,
  selectedCaseType: null,
  errorMessageList: [],
  setSelectedCountry: country => {
    set({selectedCountry: country});
  },
  setSelectedCase: typeOfCase => {
    set({selectedCaseType: typeOfCase});
  },
  submitCase: async () => {
    // TODO do a proper validation with error messages
    if (!get().selectedCountry || !get().selectedCaseType) {
      return false;
    }
    get().resetStore();
    const caseReport: CaseReport = {
      caseType: get().selectedCaseType!,
      country: get().selectedCountry!,
    };
    // TODO send caseReport to an actual API
    return true;
  },
  resetStore: () => {
    get().setSelectedCountry(null);
    get().setSelectedCase(null);
  },
}));

export default useReportCaseStore;

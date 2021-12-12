import {TypeOfCase} from '../types/TypeOfCase';
import Colors from './Colors';

const caseTypeToIndicatorColorMap: {[key in TypeOfCase]: string} = {
  confirmed: Colors.confirmedCase,
  death: Colors.deathCase,
  recovered: Colors.recoveredCase,
};

export default caseTypeToIndicatorColorMap;

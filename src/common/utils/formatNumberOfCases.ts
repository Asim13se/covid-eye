import millify from 'millify';

type Input = {
  newCases: number;
  totalCases: number;
};

export default function formatNumberOfCases(input: Input): string {
  return `${millify(input.totalCases)} (+${millify(input.newCases)})`;
}

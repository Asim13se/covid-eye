type Input = {
  newCases: number;
  totalCases: number;
};

export default function formatNumberOfCases(input: Input): string {
  const formatterOptions: any = {notation: 'compact'};
  const formatter = Intl.NumberFormat('en', formatterOptions);
  return `${formatter.format(input.totalCases)} (+${formatter.format(
    input.newCases,
  )})`;
}

export function calculateInvestmentResults({
  InitialInvestment,
  AnnualInvestment,
  expectedReturns,
  Duration,
}) {
  const annualData = [];
  let investmentValue = Number(InitialInvestment);

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturns / 100);
    investmentValue += interestEarnedInYear + Number(AnnualInvestment);

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      AnnualInvestment: Number(AnnualInvestment),
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

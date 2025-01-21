import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ data }) {
  const result = calculateInvestmentResults(data);
  const iniInvestment =
    result.length > 0
      ? result[0].valueEndOfYear - result[0].interest - result[0].AnnualInvestment
      : 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.AnnualInvestment * data.year - iniInvestment;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

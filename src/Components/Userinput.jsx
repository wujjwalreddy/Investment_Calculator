export default function Userinput({ field, onChange }) {
    return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              id="initial-investment"
              type="number"
              required
              value={field.InitialInvestment}
              onChange={(event) => onChange("InitialInvestment", +event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              id="annual-investment"
              type="number"
              required
              value={field.AnnualInvestment}
              onChange={(event) => onChange("AnnualInvestment", +event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="expected-returns">Expected Returns (%)</label>
            <input
              id="expected-returns"
              type="number"
              required
              value={field.expectedReturns}
              onChange={(event) => onChange("expectedReturns", +event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration (Years)</label>
            <input
              id="duration"
              type="number"
              required
              value={field.Duration}
              onChange={(event) => onChange("Duration", +event.target.value)}
            />
          </p>
        </div>
      </section>
    );
  }
  
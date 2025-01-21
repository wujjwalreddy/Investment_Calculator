import { useState } from "react";

export default function Userinput() {
    const [field, setfield] = useState({
        IntialInvestment: 10000,
        AnnualInvestment: 1200,
        expectedReturns: 6,
        Duration: 12
    }
    );
    function handleChange(aspect, newvalue) {
        setfield(prevfield => {
            return {
                ...prevfield,
                [aspect]: newvalue
            }
        });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Intial Investment</label>
                    <input type="number" required value={field.IntialInvestment}
                        onChange={(event) => handleChange("IntialInvestment", event.target.value)}
                    />
                </p>
                <p>
                    <label>IAnnual Investment</label>
                    <input type="number" required value={field.AnnualInvestment}
                        onChange={(event) => handleChange("AnnualInvestment", event.target.value)}
                    />
                </p>
                <p>
                    <label>Expected Returns</label>
                    <input type="number" required value={field.expectedReturns}
                        onChange={(event) => handleChange("expectedReturns", event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={field.Duration}
                        onChange={(event) => handleChange("Duration", event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
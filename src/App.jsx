import { useState } from "react";
import Header from "./Components/Header.jsx";
import Userinput from "./Components/Userinput.jsx";
import Results from "./Components/Results.jsx";

function App() {
  const [field, setField] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    expectedReturns: 6,
    Duration: 12,
  });

  function handleChange(aspect, newValue) {
    setField((prevField) => ({
      ...prevField,
      [aspect]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <Userinput field={field} onChange={handleChange} />
      <Results data={field} />
    </>
  );
}

export default App;

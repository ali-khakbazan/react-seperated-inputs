import { useState } from "react";
import "./App.css";
import { SeperatedInput } from "./components/seperated-inputs";

function App() {
  const [inputValues1, setInputValues1] = useState<string[]>([]);
  const [inputValues2, setInputValues2] = useState<string[]>([]);

  return (
    <div className="App">
      <div className="margin-bottom">
        <h1>React Seperated Inputs</h1>
      </div>

      <div className="margin-bottom">
        <SeperatedInput
          keyProp="example-1"
          length={4}
          valueLength={4}
          values={inputValues1}
          setValues={setInputValues1}
          label="Basic Example -  with same width and same value length for each input"
        />
      </div>

      <div className="margin-bottom">
        <SeperatedInput
          keyProp="example-2"
          length={6}
          inputWidths={["10%", "20%", "20%", "20%", "20%", "10%"]}
          valueLength={[2, 4, 4, 4, 4, 2]}
          values={inputValues2}
          setValues={setInputValues2}
          label="Advanced Example - diffrent widths and value length of each input example"
        />
      </div>
    </div>
  );
}

export default App;

# React Seperated Inputs

#### A simple React Seperated Inputs for all cases

a simple and reusable component of seperated inputs that you can controll every single input's width and value length with support of paste and auto next input focus and other key bindings that you need!

## Demo

https://codesandbox.io/s/react-seperated-inputs-woccke

## Usage

```javascript
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

```

## API Reference (`Table component`)

| Parameter          | Type                                       | Required | Description                                                                   |
| :----------------- | :----------------------------------------- | :------- | :---------------------------------------------------------------------------- |
| `values`           | `string[]`                                 | **YES**  | value of each input                                                           |
| `setValues`        | `Dispatch<SetStateAction<string[]>>`       | **YES**  | set values of inputs                                                          |
| `keyProp`          | `string`                                   | **YES**  | a unique key for list of inputs                                               |
| `length`           | `number`                                   | **YES**  | number of inputs                                                              |
| `valueLength`      | `number[] (or) number`                     | **YES**  | maximum value length of each input                                            |
| `inputWidths`      | `string[] (or) 'auto'`                     | **NO**   | width of each input                                                           |
| `inputStyle`       | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `labelStyle`       | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `wrapperClassName` | `string'`                                  | **NO**   | wrapper classname                                                             |
| `label`            | `string (or) ReactNode`                    | **NO**   | inputs label                                                                  |
| `inputWidths`      | `string[] (or) 'auto'`                     | **NO**   | width of each input                                                           |

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# React Seperated Inputs

#### A simple React Seperated Inputs for all cases

a simple and reusable component of seperated inputs that you can controll every single input's width and value length with support of paste and auto next input focus and other key bindings that you need!

## Demo

https://codesandbox.io/s/react-aryan-table-t4lghw

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
| `rtl`              | `boolean`                                  | **NO**   | set direction to rtl                                                          |
| `columns`          | `TableColumns`                             | **YES**  | columns of the table                                                          |
| `data`             | `TableData`                                | **YES**  | body of the table                                                             |
| `paginationProps`  | `ReactPaginateProps`                       | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `isLoading`        | `boolean`                                  | **NO**   | toggle between the table loading overlay and the main table ui                |
| `wrapperStyles`    | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `tableStyles`      | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `headerRowStyles`  | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `headerCellStyles` | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `bodyRowStyles`    | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |
| `bodyCellStyles`   | `(styles: CSSProperties) => CSSProperties` | **NO**   | a function that takes default styles and returns {...styles, your new styles} |

## API Reference (`useFilters hook`)

| Parameter | Type    | Required | Description                     |
| :-------- | :------ | :------- | :------------------------------ |
| `items`   | `any[]` | **YES**  | for creating a filterable array |

## Installation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

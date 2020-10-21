import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { SizeIndicator } from "./components/SizeIndicator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <p className="p-3 mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="my-2">
          <SizeIndicator />
        </p>
        <p className="flex flex-col justify-center mt-6 md:flex-row">
          <a
            className="uppercase btn btn--yellow"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="uppercase btn btn--yellow"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tailwind
          </a>
          <a
            className="uppercase btn btn--yellow"
            href="https://storybook.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Storybook
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

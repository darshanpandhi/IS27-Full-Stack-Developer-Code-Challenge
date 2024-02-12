import { Fragment } from "react";
import "./App.css";

// components
import Client from "./components/Client";

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Client Portal</h1>
        <Client></Client>
      </div>
    </Fragment>
  );
}

export default App;

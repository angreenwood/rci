import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Content from "./Content";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Content />
    </Fragment>
  );
}

export default App;

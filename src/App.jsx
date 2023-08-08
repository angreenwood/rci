import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Content from "./Content";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;

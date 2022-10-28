import React from "react";
import Navbar from "./components/Navbar";
import "./styles/styles.css";
import "./styles/MediaQueries.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <h1>Hello world</h1>
    </div>
  );
};

export default App;

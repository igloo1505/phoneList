import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Form />
    </div>
  );
}

export default App;

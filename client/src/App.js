import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Form from "./components/Form";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  const [admin, setAdmin] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {admin ? <Admin /> : <Form setAdmin={setAdmin} />}
    </div>
  );
}

export default App;

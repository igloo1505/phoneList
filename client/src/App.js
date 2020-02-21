import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import background from "./assets/background.png";
import ContactState from "./context/ContactState";
import M from "materialize-css/dist/js/materialize.min";
import Form from "./components/Form";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  const [admin, setAdmin] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    minHeight: "100vh"
  };

  return (
    <div className="App" style={backgroundStyle}>
      <ContactState>
        <Navbar />
        {admin ? <Admin /> : <Form setAdmin={setAdmin} />}
      </ContactState>
    </div>
  );
}

export default App;

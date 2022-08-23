import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./views/login/LogIn";
import Navbar from "./layouts/navBar/Navbar";
import Error404 from "./views/error404/Error404";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="*" name="Home" element={<Navbar />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/error404" element={<Error404 />} />

          </Routes>
        </Router>
      </div>
  );
}
export default App;

import NavBar from "./pages/navBar/NavBar";
import React from "react";
import SideBar from "./pages/sideBar/SideBar";
import AddProduct from "./pages/addProduct/AddProduct";
import Bill from "./pages/billing/Bill";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <AddProduct />
      {/* <Bill /> */}
    </div>
  );
}

export default App;

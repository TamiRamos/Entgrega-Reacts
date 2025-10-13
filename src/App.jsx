import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Ambar Nails!" />
      <Footer />
    </>
  );
}

export default App;

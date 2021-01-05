import React from "react";
import "./styles.css";
import Navbar from "./component/Navbar";
import Tab from "./component/Tab";
import Footer from "./component/Footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Tab />
      <Footer />
    </div>
  );
}

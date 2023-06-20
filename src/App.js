import React from "react";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main className="app">
      <Nav />
      <Header />
      <Footer />
    </main>
  );
};

export default App;

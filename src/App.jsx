import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import About from "./components/about/About";
import News from "./components/news/News";
import Register from "./components/register/Register";

const Main = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div> {<Main />}</div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import About from "./components/about/About";
import News from "./components/news/News";
import RegisterEvent from "./components/registerEvent/RegisterEvent";
import Login from "./components/login/Login";
import Verification from "./components/verification/Verification";
import Reset from "./components/reset/Reset";
import RegisterSite from "./components/registerSite/registerSite";
import EventDetails from "./components/eventDetails/eventDetails";

const Main = () => {
  const location = useLocation();
  
  // Layout göstərilməyəcək path-lar
  const noLayoutRoutes = ["/login", "/registerSite","/verification","/reset"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Layout />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/registerSite" element={<RegisterSite />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Projects from "./Projects";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>  
      <GlobalStyle />
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

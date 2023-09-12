import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Hjem</h1>;
}

function About() {
  return <h1>Om Os</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Hjem</Link>
        <Link to="/about">Om Os</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

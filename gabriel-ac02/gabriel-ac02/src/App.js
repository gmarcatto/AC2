import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Pagina1 = () => <h1>Pagina1</h1>;
const Pagina2 = () => <h1>Pagina2</h1>;


const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Pagina1</Link> | <Link to="about">Pagina2</Link> |{' '}
    </nav>
    <Routes>
      <Route path="/" element={<Pagina1 />} />
      <Route path="about" element={<Pagina2 />} />
    </Routes>
  </BrowserRouter>
);

export default App;

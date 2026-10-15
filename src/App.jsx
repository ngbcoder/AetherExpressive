import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ALittleSofterALotMoreExpressive from './pages/ALittleSofterALotMoreExpressive_/index.jsx';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<ALittleSofterALotMoreExpressive />} />
        <Route
          path="/ALittleSofterALotMoreExpressive_"
          element={<ALittleSofterALotMoreExpressive />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
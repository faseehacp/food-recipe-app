import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Favourites from './Pages/Favourites/Favourites';
import Community from './Pages/Community/Community';
import Courses from './Pages/Courses/Courses';
import NotFound from './Pages/NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favourites" exact element={<Favourites />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
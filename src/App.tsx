import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Header from './components/Header';

// view components

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

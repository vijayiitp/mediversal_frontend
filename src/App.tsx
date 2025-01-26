import React from 'react';
import SignUp from './components/signup.tsx';
import UserList from './pages/userlist.tsx';
import Home from './pages/home.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/userlist" element={<UserList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

// import { useEffect, useState } from "react";
// import supabase from "./supabase";

import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Landing from './pages/Landing';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

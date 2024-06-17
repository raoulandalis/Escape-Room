// import { useEffect, useState } from "react";
// import supabase from "./supabase";

import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Welcome from './pages/Welcome'


function App() {
  return (
    <main className='w-full h-screen relative bg-black'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

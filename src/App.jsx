// import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  
  return (
    <div>
      <nav>
        <Link to="/">Quiz</Link>
        <Link to="/results">Results</Link>
      </nav>
      <h1>Welcome to Pup Quiz</h1>
      <Routes>
        <Route path="/" element={<Quiz/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
      </Routes>
    </div>
  )
}

export default App

import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import StartPage from "./pages/StartPage";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
      </Routes>
    </div>
  )
}

export default App

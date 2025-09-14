import {Routes, Route} from "react-router-dom"
import './App.css'
import Gallery from "./pages/Gallery";
import Post from "./pages/Post";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Gallery />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App

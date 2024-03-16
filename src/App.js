import Login from "./components/login";
import Signup from "./components/signup";
import Map from "./components/map";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Login/>}></Route>
    <Route path='/home' element={<Map/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

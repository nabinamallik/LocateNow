import Login from "./components/login";
import Signup from "./components/signup";
import Map from "./components/map";
import Profile from './components/profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Map/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

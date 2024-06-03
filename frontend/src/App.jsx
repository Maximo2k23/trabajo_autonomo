import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Inicio from './Pages/Inicio';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/inicio' element={<Inicio />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App




import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

function App() {


    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </>
    )
  }
 

export default App

import AboutPage from './Pages/AboutPage'
import WorkSamplesPage from './Pages/WorkSamplesPage'
import ContactInformationPage from './Pages/ContactInformationPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import { useState } from 'react';

function App() {

  const [name, setName] = useState("invisible")

  return (

    <BrowserRouter>

      <button onClick={() => {
        setName(name === "visible" ? "invisible" : "visible")

      }}>Menu</button>

      <ul className={name}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work-samples">Work samples</Link></li>
        <li><Link to="/contact-info">Contact information</Link></li>
      </ul>

      <Routes>
        <Route path="/about" element={<AboutPage />}>

        </Route>

        <Route path="/work-samples" element={<WorkSamplesPage />}>

        </Route>

        <Route path="/contact-info" element={<ContactInformationPage />}>

        </Route>
      </Routes>




    </BrowserRouter>

  )
}

export default App

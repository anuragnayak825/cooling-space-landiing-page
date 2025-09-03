import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy_Policy from './Page/Privacy_Policy'
import AOS from "aos";
import "aos/dist/aos.css";
import ThankyouPage from './Page/ThankyouPage'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation ek hi bar ho
    });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/aircond-service/' element={<LandingPage />} />
          <Route path='/aircond-service/privacy-policy' element={<Privacy_Policy />} />
          <Route path='/aircond-service/thank-you' element={<ThankyouPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

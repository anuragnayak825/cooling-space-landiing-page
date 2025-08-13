import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy_Policy from './Page/Privacy_Policy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/privacy-policy' element={<Privacy_Policy/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

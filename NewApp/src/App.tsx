import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BackOffice from './BackOffice/backoffice'
import FrontOffice from './FrontOffice/frontoffice'

function App() {

  return (
    <div>
      <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/back" element={<BackOffice/>} />
              <Route path="/front" element={<FrontOffice/>} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  )
}

export default App

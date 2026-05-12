import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import BackOffice from './BackOffice/backoffice'
import FrontOffice from './FrontOffice/frontoffice'
import Login from './BackOffice/pages/login'
import { useAuthStore } from './BackOffice/utils/auth'

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div>
      <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route
                path="/back"
                element={
                  isAuthenticated ? <BackOffice /> : <Navigate to="/back/login" replace />
                }
              />
              <Route path="/back/login" element={<Login />} />
              <Route path="/front" element={<FrontOffice/>} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  )
}

export default App

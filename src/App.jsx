import { Route, Routes, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./modules/AuthProvider"
import ProtectedRoute from "./modules/ProtectedRoute"

import PageHome from './pages/PageHome'
import Page404 from './pages/Page404'
import PageLogin from './pages/PageLogin'
import PageProfile from './pages/PageProfile'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectedRoute><PageHome /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><PageHome /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><PageProfile /></ProtectedRoute>} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes, BrowserRouter } from "react-router-dom"

import Layout from './pages/Layout'
import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import Page404 from './pages/Page404'
import PageLogin from './pages/PageLogin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path='about' element={<PageAbout />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

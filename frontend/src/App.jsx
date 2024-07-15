import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
// import Error404 from './pages/error404/error404.jsx'
import Menu from "./components/menu/menu.jsx"
import './App.scss'

function App() {
  
  return (
    <BrowserRouter>
<Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard/:id" element={<Dashboard></Dashboard>}></Route>
        {/* <Route path="*" element={<Error404></Error404>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

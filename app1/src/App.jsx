import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginUser from './pages/login'
import RegisterUser from './pages/register'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddBlog from './pages/addBlog'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LoginUser />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addblog' element={<AddBlog/>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App

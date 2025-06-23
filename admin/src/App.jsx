import React, {useContext} from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import { Route, Routes } from "react-router-dom"
import { AdminContext } from "./context/AdminContext"
import Navbar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import Login from "./pages/Login"
import DoctorsList from "./pages/Admin/DoctorsList"
import Dashboard from "./pages/Admin/Dashboard"
import AddDoctor from "./pages/Admin/AddDoctor"
import AllAppointments from "./pages/Admin/AllAppointments"


const App = ()=> {
   const {aToken} = useContext(AdminContext)

   return aToken ? (
        <div className='bg-[#f8f9fd]'>
          <ToastContainer/>
          <Navbar/>
          <div className='flex items-start'>
            <Sidebar/>
            <Routes>
              <Route path="/" element={<></>}/>
              <Route path="/admin-dashboard" element ={<Dashboard/>}/>
              <Route path="/all-appointments" element ={<AllAppointments/>}/>
              <Route path="/add-doctor" element ={<AddDoctor/>}/>
              <Route path="/doctor-list" element ={<DoctorsList/>}/>
            </Routes>
          </div>
        </div>
   ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>
   )
}

export default App

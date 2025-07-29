import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/website/Home'
import Dashboard from './components/pages/admin/Dashboard';
import Base from './components/pages/admin/Base';
import Profile from './components/pages/admin/Profile';
import Report from './components/pages/admin/Reports';
import SignIn from './components/pages/website/SignIn';
import SignUp from './components/pages/website/SignUp';
import UserBase from './components/pages/user/UserBase';
import UserHome from './components/pages/user/UserHome';
import PrivateRoute from './components/PrivateRoute';
import LogOut from './components/LogOut';
import WebsiteEvents from './components/pages/website/WebsiteEvents';
import GuideLines from './components/pages/website/GuideLines';
import WebsiteContact from './components/pages/website/WebsiteContact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<WebsiteEvents />} />
          <Route path="/guidelines" element={<GuideLines />} />
          <Route path="/contact" element={<WebsiteContact />} />

          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<LogOut />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Base />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Report />} />
          </Route>
          
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserBase />
              </PrivateRoute>
            }
          >
            <Route path="home" element={<UserHome />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App

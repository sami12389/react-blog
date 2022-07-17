import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import DetailPage from './pages/DetailPage/DetailPage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Write from './pages/Write/Write'
function App() {
  return (
    <div className="App">
     
      <Router>
         <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/detailspage" element = {<DetailPage/>}/>
          <Route path = "/write" element = {<Write/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

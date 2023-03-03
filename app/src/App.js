import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calender from "./component/calender"
import Navbar from "./component/navbar/navBar"
import Events from './component/Events/Events';
import SignUp from './component/signup/signup';
import LogIn from './component/login/login';
// import Modal from 'react-modal';
//  Modal.setAppElement('#root');


function App() {

  return (
    <div>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Calender />}></Route>
           <Route path='/Events' element={<Events />}></Route>
         <Route path='/Login' element={<LogIn />}></Route>
          <Route path='/Signup' element={<SignUp />}></Route> 
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calender from "./component/calender"
import Navbar from "./component/navbar/navBar"
import Events from './component/Events/Events';
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
          {/* <Route path='/Search' element={<Search />}></Route>
          <Route path='/Contact' element={<Contact />}></Route> */} 
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
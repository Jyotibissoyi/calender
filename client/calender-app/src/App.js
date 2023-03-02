import './App.css';
import Calender from "./component/calender"
import Modal from 'react-modal';
Modal.setAppElement('#root');

//import Navbar from './Components/Navbar/Navbar';

// import { BrowserRouter , Route , Routes } from 'react-router-dom'
//import Home from '../src/Components/Home/Home'
// import SignUp from './Components/SignUp/SignUp';
// import LogIn from './Components/Login/Login';


function App() {
  return (
    <div>

      <Calender/>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogIn' element={<LogIn/>} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
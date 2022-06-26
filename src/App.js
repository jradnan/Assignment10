import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Services from './Services/Services'
import Home from './Home/Home'
import Banner from "./Banner/Banner";
import About from "./About/About";
import Login from './Login/Login';

function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;

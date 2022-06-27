import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Services from './Services/Services'
import Home from './Home/Home'
import AboutMe from "./AboutMe/AboutMe";
import Login from './Login/Login';
import Blog from './Blog/Blog';
import NotFound from './NotFound/NotFound';
import Signup from './SignUp/SignUp';
import RequireAuth from './RequirAuth/RequirAuth';
import Checkout from './Checkout/Checkout';


function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Services from './Services/Services'
import Home from './Home/Home'
import AboutMe from "./AboutMe/AboutMe";
import Login from './Login/Login';
import Blog from './Blog/Blog';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='bg-rose-50 font-serif'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

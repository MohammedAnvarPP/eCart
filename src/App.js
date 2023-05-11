import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/cart" exact element={<Cart />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

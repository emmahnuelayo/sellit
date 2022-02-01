import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

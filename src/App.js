
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './components/Header.js';
import './pages/home.js'
import './pages/about.js'
import Header from './components/Header.js';
import Home from './pages/home.js';
import About from './pages/about.js';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/about' element={<About />}> </Route>

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

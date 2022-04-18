import './css/App.css'
import { Header } from './Containers/Header/Header';
import { Main } from './Containers/Main/Main';
import { Nav } from './Containers/Nav/Nav';
import { Footer } from './Containers/Footer/Footer';
import { Users } from './Components/User/User';
import React from 'react';
import GlobalContextProvider from './Context/GlobalContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cards } from './Components/Cards/Cards';
import { BinDisplay } from './Components/BinDisplay/BinDisplay';

export default
  function App() {
  return (
    <div className="App">
      <GlobalContextProvider>

        <Header />
        <Users />
        <Nav />
        <Footer />

        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/products' element={<Cards />} ></Route>
          <Route path='/users' element={<Users />} ></Route>
          <Route path='/binDisplay' element={<BinDisplay />} ></Route>
        </Routes>

      </GlobalContextProvider>
    </div>
  );
}

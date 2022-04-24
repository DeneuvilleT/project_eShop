import React from 'react';
import GlobalContextProvider from './Context/GlobalContext';
import { Header } from './Containers/Header/Header';
import { Main } from './Containers/Main/Main';
import { Nav } from './Containers/Nav/Nav';
import { Footer } from './Containers/Footer/Footer';
import { Users } from './Components/User/User';
import { Route, Routes } from 'react-router-dom';
import { Cards } from './Components/Cards/Cards';
import { BinDisplay } from './Components/BinDisplay/BinDisplay';
import './css/App.css'

export default
  function App() {
  return (
    <div className="App">
      <GlobalContextProvider>

        <Header />
        <Users />
        <Nav />

        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/products' element={<Cards />} ></Route>
          <Route path='/users' element={<Users />} ></Route>
          <Route path='/binDisplay' element={<BinDisplay />} ></Route>
        </Routes>

        <Footer />
      </GlobalContextProvider>
    </div>
  );
}

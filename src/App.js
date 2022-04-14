import './css/App.css'
import { Header } from './Containers/Header/Header';
import { Main } from './Containers/Main/Main';
import { Nav } from './Containers/Nav/Nav';
import { Footer } from './Containers/Footer/Footer';
import { Users } from './Components/User/User';
import React from 'react';
import GlobalContextProvider from './Context/GlobalContext';

export default
  function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Header />
        <Users />

        <Main />
        <hr />
        <Nav />
        <Footer />
      </GlobalContextProvider>
    </div>
  );
}

import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Routes, Route } from 'react-router-dom';

export function Bin() {

     const { nbrProducts } = useContext(GlobalContext)
     const { myResults } = useContext(GlobalContext);
     const { reqAjax } = useContext(GlobalContext);
     const [bin, setbin] = useState([]);
     
     useEffect(() => {
          reqAjax();
          configBin()
          return () => {
          }
     }, [nbrProducts]);
     
     const configBin = () => {
          setbin(bin => [...bin, myResults[(nbrProducts-1)]]);
     };
     
     return (
          <>
               <p>Votre panier contient {bin.length - 2} articles</p>
               {/* <Routes>
                    <Route path='/bin' element={<Bin/>}/>
               </Routes> */}

          </>
     );
};


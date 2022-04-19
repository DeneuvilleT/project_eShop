import { useContext, useEffect } from 'react';
import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';

export function Bin() {

     const { nbrProducts } = useContext(GlobalContext)
     const { myResults } = useContext(GlobalContext);
     const { bin } = useContext(GlobalContext);
     const { setBin } = useContext(GlobalContext);

     useEffect(() => {
          configBin()
     }, [nbrProducts]);


     const configBin = () => {
          !nbrProducts ? console.log('Le panier est vide') : setBin(bin => [...bin, myResults[(nbrProducts)-1]]);
     };

     return (
          <>
               <Link to={"/binDisplay"}>Votre panier contient {bin.length} articles</Link>
          </>
     );
};


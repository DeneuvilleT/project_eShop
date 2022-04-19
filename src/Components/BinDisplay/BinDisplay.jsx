import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export function BinDisplay() {

   const { bin } = useContext(GlobalContext);

   return (
      <>
         <div>
            {
               bin.length && bin.map((item) => {
                  if (item === undefined) {
                     item = { id: 0, name: '', description: '', image: '', price: 0 };
                  };
                  return (
                     <div key={item.id}>
                        <h4>{item.name}</h4>
                     </div>
                  );
               })
            }
         </div>
      </>
   );
};


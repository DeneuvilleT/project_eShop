import { GlobalContext } from '../../Context/GlobalContext';
import React, { useContext, useState } from 'react';
import styles from '../BinDisplay/bindisplay.module.css';
import { Button } from '../Button/Button';

export function BinDisplay() {

   const { bin } = useContext(GlobalContext);
   const [quantity, setQuantity] = useState(null);

   return (
      <ul className={styles.bin} >
         {
            bin.map((item) => {

               return (
                  <li key={item.id}>
                     <img src={item.image} alt={item.name} />
                     <p>{item.name}</p>
                     <p>{item.price} €</p>
                     <Button idProducts={item.id} valeur={'Supprimer'} />
                     <Button idProducts={item.id} valeur={'Quantité'} />
                     <ins>{quantity}</ins>
                  </li>
               );
            })
         }
         <hr />
      </ul>
   );
};


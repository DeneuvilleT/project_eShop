import { GlobalContext } from '../../Context/GlobalContext';
import React, { useContext, useState } from 'react';
import styles from '../BinDisplay/bindisplay.module.css';
import { Button } from '../Button/Button';
import { ReactComponent as BinEmpty } from '../../img/bin-empty.svg'

export function BinDisplay() {

   const { bin } = useContext(GlobalContext);
   const [quantity, setQuantity] = useState(null);

   return (
      <>
         <div className={styles.bindisplay}>
            <div>
               <h4>Descritpion :</h4>
               <h4>Prix :</h4>
               <h4>Quantity :</h4>
            </div>
         </div>

         <ul className={styles.bindisplay}>
            {
               bin.length === 0 &&
               <>
                  <li><h2>Votre panier est vide pour l'instant ...</h2></li>
                  <li><BinEmpty /></li>
               </>
            }

            {
               bin.length !== 0 && bin.map((item) => {
                  return (
                     <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.price} €</p>
                        <Button idProducts={item.id} valeur={<i style={{ color: 'red', fontSize: '3rem' }} className="fa-solid fa-trash-can"></i>} />
                        <Button idProducts={item.id} valeur={<i style={{ color: 'blue', fontSize: '3rem' }} className="number fa-solid fa-arrow-down-1-9"></i>} />
                        <ins>{quantity}</ins>
                        <hr />
                     </li>
                  );
               })
            }
         </ul >
      </>
   );
};


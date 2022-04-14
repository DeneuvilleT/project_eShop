import React, { useEffect, useContext } from 'react';
import styles from '../Cards/cards.module.css';
import { Button } from '../Button';
import { GlobalContext } from '../../Context/GlobalContext';


export function Cards() {

    const { addBuy } = useContext(GlobalContext);
    const { myResults } = useContext(GlobalContext);
    const { reqAjax } = useContext(GlobalContext);

    useEffect(() => {
        reqAjax()
    }, []);

    return (
        <>
            {
                myResults.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <div className={styles.cards}>
                                <h3>{item.name}</h3>
                                <img src={item.image} />
                                
                                <details style={{ textDecoration: 'underline', cursor: 'pointer' }} >{item.description}</details>

                                <p style={{ fontWeight: 'bolder' }}>Prix : {item.price} €</p>

                                <Button idProducts={item.id} classname="buy_btn" valeur="Acheter" fonction={addBuy} />
                            </div>
                        </React.Fragment>
                    );
                })
            }
        </>
    );
};

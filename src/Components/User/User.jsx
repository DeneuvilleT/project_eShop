import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import styles from "../User/user.module.css";
import { GlobalContext } from "../../Context/GlobalContext";

export function Users() {

    const { name } = useContext(GlobalContext);
    const { lastName } = useContext(GlobalContext);
    const [isConnected, setConnect] = useState(true);

    const buttonDisabled = () => {
        if (isConnected === false) {
            document.querySelectorAll('.buy_btn').forEach((e) => {
                e.disabled = true;
            });
        } else {
            document.querySelectorAll('.buy_btn').forEach((e) => {
                e.disabled = false;
            });
        };
    };

    useEffect(() => {
        buttonDisabled();
    }, [isConnected]);

    return (
        <div className={styles.user}>
            <h3>{name}</h3>
            <h3>{lastName}</h3>
            
            <span>
                {
                    isConnected && <p style={{ color: "green" }}>Connecté</p>
                }
                {
                    !isConnected && <p style={{ color: "red" }}>Déconnecté</p>
                }
            </span>

            
            <Button classname={styles.user} valeur={!isConnected ? "Connexion" : "Deconnexion"} fonction={(e) => setConnect(!isConnected ? true : false)} />

        </div>
    );
};
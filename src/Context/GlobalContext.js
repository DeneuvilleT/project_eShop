import React, { createContext, useState } from 'react';
import { fetchApi } from '../api/fetch';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

    const [theme, setTheme] = useState(false);
    const [name, setName] = useState("Thomas");
    const [lastName, setLastName] = useState("Deneuville");
    const [nbrProducts, setProducts] = useState(null);
    const [myResults, setResults] = useState([]);
    
    const addBuy = (e) => {
        
        let realNbr = Number(e.target.id);
        setProducts(realNbr);
        e.target.disabled = true;
    };

    const reqAjax = () => {
        fetchApi().then(res => {
            if (res.status === 200) {
                setResults(res.data.database);
            } else {
                console.log('err', res);
            };
        });
    };
    
    return (
        <GlobalContext.Provider value={{ theme, name, lastName, addBuy, nbrProducts, myResults, reqAjax }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;

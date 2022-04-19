import React, { createContext, useState } from 'react';
import { fetchApi } from '../api/fetch';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

    const [theme, setTheme] = useState(false);
    
    const [name, setName] = useState("Thomas");
    const [lastName, setLastName] = useState("Deneuville");

    const [nbrProducts, setProducts] = useState(null);
    const [myResults, setResults] = useState([]);
    const [bin, setBin] = useState([]);


    const reqAjax = () => {
        fetchApi().then(res => {
            if (res.status === 200) {
                setResults(res.data.database);
            } else {
                console.log('err', res);
            };
        });
    };


    const addBuy = (e) => {
        reqAjax();
        e.target.disabled = true;
    };

    return (
        <GlobalContext.Provider value={{ theme, name, lastName, addBuy, nbrProducts, myResults, reqAjax, bin, setBin}}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;

import React, { useState, useContext, createContext } from "react";

export const FavsContext = createContext();

export function useFavs() {
    return useContext(FavsContext);
}

export function FavsProvider({ children }) {
    const [favsIdArray, setFavsIdArray] = useState([]);

    function updateFavs(id) {
        const isIdInArray = favsIdArray.includes(id);

        
        if (isIdInArray) {
            const updatedArray = favsIdArray.filter(
              (productId) => productId !== id
            );
            setFavsIdArray(updatedArray);
        } else {
              const updatedArray = [...favsIdArray, id];
            setFavsIdArray(updatedArray);
          }
    }
    return (
        <FavsContext.Provider value={{ favoritesArray: favsIdArray, updateFavs }}>
            {children}
        </FavsContext.Provider>
    )
}
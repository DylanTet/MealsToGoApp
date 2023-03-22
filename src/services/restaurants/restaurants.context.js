import React, { useState, createContext, useEffect, useMemo } from 'react';
import { restaurantsRequest, dataTransformed } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {

    const [restaraunts, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retreiveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest().then(dataTransformed).then((results) => {
                setIsLoading(false)
                setRestaurants(results);
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            });
        }, 2000);
    };

    useEffect(() => {
        retreiveRestaurants();
    }, []);

    return (
        <RestaurantContext.Provider value={{ restaraunts, isLoading, error }}>
            {children}
        </RestaurantContext.Provider>
    )
}


import { mocks } from "./mock/index";
import camelize from "camelize"

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('No location found')
        }

        resolve(mock)
    });
};

export const dataTransformed = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant, 
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        };
    });
    return camelize(mappedResults);
};
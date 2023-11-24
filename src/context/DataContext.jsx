"use client"
import { useState, useContext, createContext } from "react";
import { datas } from "@/data/data";

const DataContext = createContext();


// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const menu = datas;
    const menuCategories = Object.keys(menu);
    const [items, setItems] = useState(menu.appetizers);
    const [activeCat, setActiveCat] = useState("appetizers")

    const setItemsByCatName = (catName) => {
        if (menu.hasOwnProperty(catName)) {
            setItems(menu[catName]);
            setActiveCat(catName)
        } else {
            console.error(`Invalid category name: ${catName}`);
        }
    }

    const contextValues = {
        menu,
        items,
        activeCat,
        menuCategories,
        setItemsByCatName,
    }
    return (
        <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>
    )
}

export default function useData() {
    return useContext(DataContext);
}
import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null)

const GlobalState = ({ children }) => {

    const [cuisines, setCuisines] = useState([]);
    const [dishDatails, setDishDeatails] = useState()
    const [orderList, setOrderList] = useState([])

    const handleOrderList = (currentItem) => {
        
        setOrderList((prevOrederList) => {
            const itemIndex = prevOrederList.findIndex(item => item.id === currentItem.id)
            const newArray = [...orderList]
            if (itemIndex === -1) {
                newArray.push(currentItem)
            } else {
                newArray.splice(itemIndex, 1)
            }
            return newArray;
        })
    }

    console.log(orderList)
    return (
        <GlobalContext.Provider value={{ cuisines, setCuisines, dishDatails, setDishDeatails, handleOrderList , orderList}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
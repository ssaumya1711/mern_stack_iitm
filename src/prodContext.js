import React from "react";
import { useState } from "react/cjs/react.development";

let ProdContext = React.createContext();

export default ProdContext;

export const ProdProvider = ({children}) => {
    let data = [
 {
  prodName: "Rustic Frozen Shoes",
  price: 34743,
  id: "1"
 },
 {
  prodName: "Incredible Rubber Car",
  price: 77378,
  id: "2"
 },
 {
  prodName: "Small Rubber Cheese",
  price: 73076,
  id: "3"
 },
 {
  prodName: "Incredible Wooden Soap",
  price: 94322,
  id: "4"
 },
 {
  prodName: "Unbranded Plastic Fish",
  price: 16319,
  id: "5"
 },
 {
  prodName: "Practical Soft Bike",
  price: 34036,
  id: "6"
 },
 {
  prodName: "Handmade Frozen Pizza",
  price: 61750,
  id: "7"
 },
 {
  prodName: "Practical Frozen Table",
  price: 18198,
  id: "8"
 },
 {
  prodName: "Licensed Wooden Pants",
  price: 27185,
  id: "9"
 },
 {
  prodName: "Refined Rubber Chair",
  price: 27377,
  id: "10"
 }
]
    const [prodList,setProdList] = useState([...data]);
    return <ProdContext.Provider value={{prodList,setProdList}}>
        {children}
    </ProdContext.Provider>
}
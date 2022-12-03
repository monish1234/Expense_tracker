import React, {useContext} from "react";
import { Globalcontext } from "../context/Global_state";



export const Balance =() =>{
     
     const {Transactions} = useContext(Globalcontext) 
     

     const amount =Transactions.map(transaction => (transaction.amount))
     const total =amount.reduce((acc, item)=> (acc+= item),0).toFixed(2); 
  return(
    <>
    <h4>Your Balance</h4>
    <h1>&#8377; {total}</h1>
    </>
  )
}
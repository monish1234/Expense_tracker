import React, {useContext} from "react"
import { Globalcontext } from "../context/Global_state"
import {Trans} from "./transaction"

export const Translist= ()=> {

   const {Transactions}  = useContext(Globalcontext);
   
  return(
      <>
        <h3>History</h3>
        <ul className="list">      
          {Transactions.map(transaction => (<Trans key={transaction.id} trans= {transaction}/> ))}
        </ul>
      </>
  )
}
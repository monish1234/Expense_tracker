import React, {useContext} from "react"
import { Globalcontext } from "../context/Global_state"

export const Trans =({trans}) =>{

  const { deleteTransaction } = useContext(Globalcontext)

  const sign = trans.amount < 0 ? "-" : "+"; 
  return(
    <> 
    <li className={trans.amount < 0 ? "minus" : "plus"}>{trans.text}<span>{sign}&#8377; {Math.abs(trans.amount)}</span><button onClick={() =>deleteTransaction(trans.id)} className="delete-btn" >X</button>
    </li>
    </>
  )
}
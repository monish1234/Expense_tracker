import React, {useContext} from "react"
import { Globalcontext } from "../context/Global_state"


export const Inc =()=>{

  const {Transactions} = useContext(Globalcontext)

  const amount =Transactions.map(transaction =>(transaction.amount))

  const income = amount
  .filter(item => item > 0)
  .reduce((acc, item) => (acc+= item),0)
  .toFixed(2); 

  const expense = amount
  .filter(item => item < 0)
  .reduce((acc, item) => (acc+= item),0)
  .toFixed(2); 
  return(

    <div className="inc-exp-container">
    <div> 
      <h4>&#8377; {income}</h4>
    <p className="money plus">income</p>
    </div>
    <div>
      <h4>&#8377; {expense}</h4>
    <p className="money minus">expense</p>
    </div>
  </div>
  )
}   
import React, { useState, useContext } from "react"
import { Globalcontext } from "../context/Global_state"


export const Addtransaction=() =>{
  const [text, setText]=useState("");
  const [amount, setAmount]= useState("");


  const { AddTransaction } = useContext(Globalcontext)

  const Adding = e =>{
    e.preventDefault();

    const newTransaction={
      id: Math.floor(Math.random()* 10000000),
      text,
      amount: +amount
    } 

    AddTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={Adding}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
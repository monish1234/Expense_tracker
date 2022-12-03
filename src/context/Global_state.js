import React, {createContext, useReducer} from  'react';
import Appreducer from "./Appreducer"
//initial state

export const initialState={
    Transactions : []
    
}



//CREATE CONTEXT
export const Globalcontext = createContext(initialState)






//provider component
export const GlobalProvider=({children})=> {
  const [state, dispatch]= useReducer(Appreducer, initialState);


//Action DELETE TRANSACTION
function deleteTransaction(id) {
  dispatch({
    type: "DeleteTransaction",
    payload:id

  })  
}


//ADD TRANSACTION
function AddTransaction(Transactions) {
  dispatch({
    type: "AddTransaction",
    payload: Transactions

  })  
}

  return(<Globalcontext.Provider value={{Transactions: state.Transactions, deleteTransaction, AddTransaction}}> 
    {children}
  </Globalcontext.Provider>)
}
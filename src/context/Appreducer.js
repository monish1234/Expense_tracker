

export default (state, action) =>{
  switch(action.type){
    case 'DeleteTransaction': 

    return{
      ...state, 
      Transactions: state.Transactions.filter(transaction => transaction.id !== action.payload)
    }

    case 'AddTransaction':
    return{
      ...state,
      Transactions: [action.payload, ...state.Transactions]
    }


    default: 
    return state;
  }
} 
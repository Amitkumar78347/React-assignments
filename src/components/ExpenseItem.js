
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';



function ExpenseItem(props) {

  const [amount,setAmount]= useState(props.amount);

  
  const clickHandler = () => {
    setAmount('100');
    console.log(amount);
  };




  return <div className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>

    <div className="expense-item__description">
      <h2 className="expense-item h2">{props.title}</h2>
      <h2 className="expense-item h2">{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
    <button onClick={clickHandler}>Change Expense</button>

  </div>
}

export default ExpenseItem;
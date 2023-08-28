
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';



function ExpenseItem(props) {

  const [title,setTitle]= useState(props.title);

  
  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };




  return <div className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>

    <div className="expense-item__description">
      <h2 className="expense-item h2">{title}</h2>
      <h2 className="expense-item h2">{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>

  </div>
}

export default ExpenseItem;


import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';



function ExpenseItem(props) {
    const handleDeleteExpense = () => {
        const expenseItemElement = document.querySelector('.expense-item');
        if (expenseItemElement) {
          expenseItemElement.remove();
        }
      };

  


    return <div  className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
       
        <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <h2 className="expense-item h2">{props.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleDeleteExpense}>Delete Expense</button>
        
    </div>}

    export default ExpenseItem;
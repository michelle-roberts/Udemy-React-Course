import { ExpenseItemInterface } from './ExpenseItem.interface';
import './ExpenseItem.component.scss';
import ExpenseDateComponent from '../Expense-Date/ExpenseDate.component';

function ExpenseItemComponent(props: ExpenseItemInterface) {
    return (
      <div className="expense-item-container">
          <div className='expense-item'>
            <ExpenseDateComponent date={props.date} />

            <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItemComponent;
  
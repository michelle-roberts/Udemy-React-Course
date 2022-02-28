import { useState } from 'react';
import { ExpenseItemInterface } from './ExpenseItem.interface';
import ExpenseDateComponent from '../ExpenseDate/ExpenseDate.component';
import CardComponent from '../../Shared/Card/Card.component';
import './ExpenseItem.component.scss';

const ExpenseItemComponent = (props: ExpenseItemInterface) => {
  
  const [title, setTitle] = useState(props.title); 

  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <div className='expense-item-container'>
      <CardComponent className='expense-item'>
        
        <ExpenseDateComponent date={props.date} />

        <div className='expense-item__description'>
          <h3>{title}</h3>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </CardComponent>
    </div>
  );
}

export default ExpenseItemComponent;

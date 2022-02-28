import { useState } from 'react';
import './ExpenseForm.component.scss';

const ExpenseFormComponent = (props: any) => {
    // State
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
    // Event Handlers 
    const titleChangeHandler = (event: any) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event: any) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: any) => {
        setEnteredDate(event.target.value);
    }
    const submitFormHandler = (event: any) => {
        event.preventDefault();
        const formData = { 
            enteredTitle, 
            enteredAmount, 
            enteredDate 
        };
        props.onSaveExpenseData(formData);
        formInit();
    }

    // Reset Form
    const formInit = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitFormHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} placeholder='Enter Title'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} placeholder='Enter Amount'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default  ExpenseFormComponent;
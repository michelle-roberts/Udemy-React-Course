import ExpenseFormComponent from './Form/ExpenseForm.component';
import './NewExpense.component.scss';

const NewExpenseComponent = (props: any) => {
    
    const onSaveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData  = {
            ...enteredExpenseData, 
            id: Math.floor(Math.random() * 100 + 1)
        }
        props.onAddNewExpenseItem(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseFormComponent onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
};

export default NewExpenseComponent;
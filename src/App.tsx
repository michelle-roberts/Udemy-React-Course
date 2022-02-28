import { ExpenseItemInterface } from './components/ExpenseGroup/ExpenseItem/ExpenseItem.interface';
import ExpenseComponent from './components/ExpenseGroup/Expense/Expense.component';
import NewExpenseComponent from './components/NewExpenseGroup/NewExpense.component';

const test = (value: any) => {
  // value = [1, 3, 6, 4, 1, 2];
  // value = [1, 2, 3];
  value = [-1, -3];
  // write your code in JavaScript (Node.js 8.9.4)
  let result = [];

  for (let i = 0; i < value.length; ++i) {
    if (0 <= value[i]) {
      result[value[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; ++i) {
    console.log(result);
    if (undefined === result[i]) {
      console.log(i);
      return i;
    }
  }

  return 1;
}

const App = () => {
  const expenses: Array<ExpenseItemInterface> = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Mortgage',
      amount: 1450,
      date: new Date(2021, 3, 10),
    }
  ];

  const addNewExpenseHandler = (newExpenseItemData: any) => {
    const newExpenseData = {
      ...newExpenseItemData,
    }
  }

  return (
    <div className='App'>
      <NewExpenseComponent onAddNewExpenseItem={addNewExpenseHandler} />
      <button onClick={test}>RUN THIS TEST</button>
      <ExpenseComponent expenseList={expenses} />
    </div>
  );
}

export default App;

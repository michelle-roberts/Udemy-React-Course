import ExpenseItemComponent from "./components/Expense-Item/ExpenseItem.component";

function App() {

  const expenses: Array<any> = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Mortgage",
      amount: 1450,
      date: new Date(2021, 3, 10),
    }
  ];

  return (
    <div className="App">
      <ExpenseItemComponent id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItemComponent id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItemComponent id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItemComponent id={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      <ExpenseItemComponent id={expenses[4].id} title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/>
    </div>
  );
}

export default App;

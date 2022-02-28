import ExpensesFilter from '../../ExpenseFilterGroup/ExpenseFilter/ExpenseFilter.component';
import CardComponent from '../../Shared/Card/Card.component';
import ExpenseItemComponent from '../ExpenseItem/ExpenseItem.component';
import './Expense.component.scss';

const ExpenseComponent = (props: any) => {
  const expenseList = props.expenseList;

  return (
    <div>
      <CardComponent>
        <ExpensesFilter />
      </CardComponent>
      <CardComponent className='expense-wrapper'>
        { expenseList.map((data: any, idx: number) => (
          <div key={idx}>
            <ExpenseItemComponent
              id={data.id}
              date={data.date}
              title={data.title}
              amount={data.amount}
            />
          </div>
        )) }
      </CardComponent>
    </div>
  );
}

export default ExpenseComponent;

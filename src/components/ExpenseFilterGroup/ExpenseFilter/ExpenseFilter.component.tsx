import './ExpenseFilter.component.scss';

const ExpensesFilter = () => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let result = [];

//   for (let i = 0; i < A.length; ++i) {
//       if (0 <= A[i]) {
//           result[A[i]] = true;
//       }
//   }

//   for (let i = 1; i <= result.length; ++i) {
//       if (undefined === result[i]) {
//           return i;
//       }
//   }

//   return 1;
// }

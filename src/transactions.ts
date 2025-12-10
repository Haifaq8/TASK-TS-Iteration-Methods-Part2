// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]

  // write your code here...
  
  function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
    return transactions.filter(([type]) => type === "income");
  }
  

// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]

  // write your code here...
  function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
    return transactions.filter(([type]) => type === "expense");
  }
  

// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)

  // write your code here...
  function calculateTotalIncome(transactions: Transaction[]): number {
    return transactions.reduce((sum, [type, amount]) => {
      if (type === "income") {
        return sum + amount;
      }
      return sum;
    }, 0);
  }
  

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
  // write your code here...
  function calculateTotalExpenses(transactions: Transaction[]): number {
    return transactions.reduce((sum, [type, amount]) => {
      if (type === "expense") {
        return sum + amount;
      }
      return sum;
    }, 0);
  }
  

// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)

  // write your code here...
  function calculateNetTotal(transactions: Transaction[]): number {
    const income = calculateTotalIncome(transactions);
    const expenses = calculateTotalExpenses(transactions);
  
    return income - expenses;
  }
  


// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]

  // write your code here...
  function filterSignificantTransactions(
    transactions: Transaction[],
    threshold: number
  ): Transaction[] {
    return transactions.filter(([_, amount]) => amount >= threshold);
  }
  


export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};

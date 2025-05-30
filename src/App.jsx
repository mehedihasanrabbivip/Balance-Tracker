import { useState } from "react";
import ParsonalBalanceTracker from "./Project Mini/ParsonalBalanceTracker/ParsonalBalanceTracker";
import Balance from "./Project Mini/ParsonalBalanceTracker/Balance";
import Income from "./Project Mini/ParsonalBalanceTracker/Income";
import TransactionList from "./Project Mini/ParsonalBalanceTracker/TransactionList";
import AddTransaction from "./Project Mini/ParsonalBalanceTracker/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, t) => acc + t.amount, 0);
  };

  const calculateIncome = () => {
    return transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);
  };

  const calculateExpenses = () => {
    return transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
  };

  return (
    <>
      <ParsonalBalanceTracker />
      <Balance balance={calculateBalance()} />
      <Income income={calculateIncome()} expenses={calculateExpenses()} />
      <TransactionList transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
    </>
  );
}

export default App;

import React from 'react';

function TransactionList({ transactions }) {
  return (
    <>
      <ul className="container mx-auto px-4 max-w-xl space-y-2">
        {
          transactions.map(transaction => (
            <li
              key={transaction.id}
              className={`flex justify-between items-center p-3 rounded shadow-sm ${
                transaction.amount > 0 ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              }`}
            >
              <span className="capitalize font-medium">{transaction.text}</span>
              <span className="font-semibold">
                {transaction.amount > 0 ? `+$ ${transaction.amount}` : `-$ ${Math.abs(transaction.amount)}`}
              </span>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default TransactionList;

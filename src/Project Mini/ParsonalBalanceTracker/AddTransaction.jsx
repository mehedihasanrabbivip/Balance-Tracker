import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || amount === 0) return;

    addTransaction({
      id: Math.random(),
      text,
      amount: +amount
    });

    setText("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md flex flex-col gap-4 ">
      <input
        type="text"
        placeholder="Transaction Details"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (e.g., +500 for income or -300 for expense)"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        ➕ Add Transaction
      </button>
    </form>
  );
}

export default AddTransaction;

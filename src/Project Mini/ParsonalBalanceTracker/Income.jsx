import React from 'react';

function Income({ income, expenses }) {
  return (
    <div className="flex justify-around max-w-md mx-auto my-6 p-4 bg-white shadow-md rounded-md text-center">
      <div className="w-1/2 border-r border-gray-300">
        <h3 className="text-gray-700 text-lg font-medium mb-1">Income</h3>
        <p className="text-green-600 text-xl font-bold">+$ {income}</p>
      </div>
      <div className="w-1/2">
        <h3 className="text-gray-700 text-lg font-medium mb-1">Expenses</h3>
        <p className="text-red-500 text-xl font-bold">- ${Math.abs(expenses)}</p>
      </div>
    </div>
  );
}

export default Income;

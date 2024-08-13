'use client';
import { useState } from 'react';

export default function BuySell() {
  const [isActiveSell, setIsActiveSell] = useState(false);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [selectedToken, setSelectedToken] = useState('Option 1');

  const tokenPrices: { [key: string]: number } = {
    'Option 1': 100,
    'Option 2': 200,
    'Option 3': 300,
    'Option 4': 400,
  };

  const pricePerToken = tokenPrices[selectedToken];

  const totalCost = numberOfTokens * pricePerToken;

  const handleNumberOfTokensChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfTokens(Math.max(0, value)); // Ensures non-negative value
  };

  const handleSellButtonClick = () => {
    setIsActiveSell(true);
  };

  const handleBuyButtonClick = () => {
    setIsActiveSell(false);
  };

  const handleTokenChange = (event: { target: { value: string } }) => {
    setSelectedToken(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-background-800 rounded-md p-4 shadow-md">
        <div className="flex justify-between">
          <button
            className={` text-white font-bold py-2 px-4 rounded font-heading
              ${!isActiveSell && 'active'} ${
              !isActiveSell ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400'
            }`}
            onClick={handleBuyButtonClick}
          >
            BUY
          </button>
          <button
            className={`text-white font-bold py-2 px-4 rounded font-heading ${
              isActiveSell && 'active'
            } ${isActiveSell ? 'bg-red-500 hover:bg-red-600 ' : 'bg-gray-500'}`}
            onClick={handleSellButtonClick}
          >
            SELL
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <label className="flex items-center font-body">
            Token
            <select
              className="ml-2 border rounded py-2 px-3 font-body"
              value={selectedToken}
              onChange={handleTokenChange}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <div className="flex items-center font-body">
            <label>Number of tokens </label>
            <input
              type="number"
              id="numOfTokens"
              className="ml-2 border rounded py-2 px-3 font-body"
              value={numberOfTokens}
              onChange={handleNumberOfTokensChange}
            />
          </div>
          <div className="flex items-center font-body">
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center font-body">
          <p>Balance: $15000.00</p>
        </div>
        <button
          className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full font-heading ${
            isActiveSell ? 'bg-red-500' : ''
          }`}
        >
          {isActiveSell ? 'SELL' : 'BUY'}
        </button>
      </div>
    </div>
  );
}

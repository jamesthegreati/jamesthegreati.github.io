'use client';

import { useState, useMemo } from 'react';

const CostCalculator = () => {
  const [servers, setServers] = useState(10);
  const [dataTransfer, setDataTransfer] = useState(100);
  const [storage, setStorage] = useState(500);

  const savings = useMemo(() => {
    const serverSavings = servers * 5;
    const dataTransferSavings = dataTransfer * 0.5;
    const storageSavings = storage * 0.1;
    return serverSavings + dataTransferSavings + storageSavings;
  }, [servers, dataTransfer, storage]);

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">
        Find Your Cloud Savings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <label htmlFor="servers" className="mb-2">
            Number of Servers
          </label>
          <input
            type="range"
            id="servers"
            min="1"
            max="100"
            value={servers}
            onChange={(e) => setServers(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-2xl font-bold mt-2">{servers}</div>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="dataTransfer" className="mb-2">
            Monthly Data Transfer (GB)
          </label>
          <input
            type="range"
            id="dataTransfer"
            min="10"
            max="1000"
            value={dataTransfer}
            onChange={(e) => setDataTransfer(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-2xl font-bold mt-2">{dataTransfer}</div>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="storage" className="mb-2">
            Total Storage (GB)
          </label>
          <input
            type="range"
            id="storage"
            min="100"
            max="5000"
            value={storage}
            onChange={(e) => setStorage(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-2xl font-bold mt-2">{storage}</div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg">Potential Monthly Savings</p>
        <p className="text-4xl font-bold text-coral-accent">${savings.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CostCalculator;

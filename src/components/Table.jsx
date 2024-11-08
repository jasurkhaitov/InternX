import React, { useState } from 'react';
import NotFoundTable from './NotFoundTable'
import Weekly from './Weekly'

export default function Table() {
  const [activeTab, setActiveTab] = useState("weekly");

	const activeTabUI = 'bg-[#202492] text-white'
	const nonActiveTabUI = 'bg-neutral-200 text-[#030229] hover:bg-neutral-300'

  return (
    <div className="flex flex-1">
      <div className="p-2 md:py-[25px] md:px-7 bg-neutral-100 flex flex-col gap-2 flex-1 w-full h-full">
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-between mb-[25px]'>
          <h2 className="text-2xl text-[#030229] font-bold">Jadval</h2>
          
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setActiveTab("weekly")}
              className={`rounded-[10px] px-[14px] py-[10px] text-sm font-semibold transition-colors duration-200 ${
                activeTab === "weekly"
                  ? `${activeTabUI}`
                  : `${nonActiveTabUI}`
              }`}
            >
              Haftalik
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`rounded-[10px] px-[14px] py-[10px] text-sm font-semibold transition-colors duration-200 ${
                activeTab === "monthly"
                  ? `${activeTabUI}`
                  : `${nonActiveTabUI}`
              }`}
            >
              Oylik
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`rounded-[10px] px-[14px] py-[10px] text-sm font-semibold transition-colors duration-200 ${
                activeTab === "yearly"
                  ? `${activeTabUI}`
                  : `${nonActiveTabUI}`
              }`}
            >
              Yillik
            </button>
          </div>
        </div>

        <div>
          {activeTab === "weekly" && <Weekly/>}
          {activeTab === "monthly" && <NotFoundTable type="Oylik"/>}
          {activeTab === "yearly" &&  <NotFoundTable type="Yillik"/>}
        </div>
      </div>
    </div>
  );
}
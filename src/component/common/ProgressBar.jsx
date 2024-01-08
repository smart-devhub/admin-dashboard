// ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#00CDAC] bg-teal-200">
            {`${percentage}%`}
          </span>
        </div>
      </div>
      <div className="flex h-3 mb-4 overflow-hidden text-xs rounded-md bg-teal-200">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#00CDAC]"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

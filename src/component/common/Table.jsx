// Table.js
import React, { useContext } from 'react';
import { ModeContext } from '../../context/context';

const Table = ({ headers, data, title }) => {
    const {isDarkMode}=useContext(ModeContext)
    return (
        <>
            <h1 className='text-[25px] font-mono mt-3'>{title}</h1>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className={`${isDarkMode  ? "bg-[#5a5a5a] text-white" : "bg-gray-50 text-gray-500"}`}>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={`${isDarkMode  ? "bg-[#333]" : "bg-white"} divide-y divide-gray-200`}>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 whitespace-nowrap"
                                >
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;

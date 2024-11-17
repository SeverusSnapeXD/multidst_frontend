import React from 'react'

export default function Table({ pValues, detectedBy, titles, originalPValues }) {
  // If no data, don't render the table
  if (!pValues || !originalPValues) return null;

  // Convert originalPValues to array if it's a string
  const pValuesArray = typeof originalPValues === 'string' 
    ? originalPValues.split(',').map(val => val.trim())  // Just split and trim, don't convert yet
    : originalPValues;

  // Create array of objects with value and original index
  const indexedOriginalValues = pValuesArray?.map((value, index) => ({
    value: value,  // Keep as string for now
    originalIndex: index
  }));

  // First find the top 10 values from pValues
  const top10Values = pValues?.slice(0, 10);

  // Then map these values to find their original indices
  const sortedIndices = top10Values?.map((value, index) => {
    // Convert both values to strings for comparison
    const valueStr = value.toString();
    
    // Find matching value in original array
    const originalEntry = indexedOriginalValues?.find(
      item => item.value === valueStr
    );

    console.log('Matching:', {
      searchValue: valueStr,
      foundValue: originalEntry?.value,
      originalIndex: originalEntry?.originalIndex
    });

    return {
      value: value,
      index: index + 1,
      originalIndex: originalEntry?.originalIndex || index
    };
  });

  return (
    <div className="overflow-x-auto my-10">
      <div className="mb-4 font-semibold text-lg">Top 10 most significant inputs</div>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border border-gray-300 px-4 py-2">Index</th>
            {titles && <th className="border border-gray-300 px-4 py-2">Title</th>}
            <th className="border border-gray-300 px-4 py-2">p-value</th>
            <th className="border border-gray-300 px-4 py-2">Detected by</th>
          </tr>
        </thead>
        <tbody>
          {sortedIndices?.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-700">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.originalIndex + 1}
              </td>
              {titles && (
                <td className="border border-gray-300 px-4 py-2">
                  {titles[item.originalIndex]}
                </td>
              )}
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.value}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {detectedBy?.[idx] ? detectedBy[idx].join(', ') : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

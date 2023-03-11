import React from "react";

const rowStyle =
  "bg-gray-400 text-gray-700 border-b border-gray-700 hover:bg-gray-200 \
                hover:transition-colors duration-150 hover:duration-150";

const dataStyle = "px-6 py-2";

const Table = ({ headers, rowData }) => {
  const heading = headers.map((col) => (
    <th scope="col" className="px-6 py-3">
      {col}
    </th>
  ));

  // TODO: Map index to row key
  // TODO: There must be a better approach than two nested arrays
  const rows = rowData.map((row) => {
    const cells = row.map((data) => {
      return <td className={dataStyle}>{data}</td>;
    });

    return <tr className={rowStyle}>{cells}</tr>;
  });

  return (
    <div className="w-full bg-gray-500 ">
      <div className="w-fit h-fit m-2 relative overflow-x-auto shadow-md rounded-lg">
        <table className="text-sm text-left text-gray-00">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700">
            <tr>
                <td className="col-span-3"> asdddd</td>
            </tr>
            {heading}
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

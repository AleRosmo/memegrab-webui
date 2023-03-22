import React, { useState, useEffect } from "react";
import axios from "axios";

const rowStyle =
  "bg-gray-400 text-gray-700 border-b border-gray-700 hover:bg-gray-200 hover:transition-colors duration-150 hover:duration-150";

const dataStyle = "";

const headerStyle = "";

// TODO: Change name 'endpoint', fa cagare
// TODO: Break down in smaller components
const Table = ({ info }) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {

    axios.get(info.url, { withCredentials: true }).then((response) => {

      const rows = response.data.map((row) => {

        const cells = Object.values(row).map((cell) => {
          return (
            <td key={cell} className="px-6 py-2 max-w-sm overflow-hidden overflow-ellipsis hover:h-fit">
              {cell}
            </td>
          );
        });
        return (
          <tr key={row.id} className={rowStyle}>
            {cells}
          </tr>
        );
      });
      setRows(rows);
    });
  }, []);

  const heading = info.headers.map((col, i) => (
    <th key={i} scope="col" className="px-6 py-3">
      {col}
    </th>
  ));

  return (
    <div className="h-full mt-2 bg-gray-700 shadow-md rounded-xl overflow-scroll overscroll-none">
      <table className="w-full text-sm text-left text-gray-200">
        <thead className="text-xs text-gray-300 uppercase">
          <tr>{heading}</tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <td>[placeholder]</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;

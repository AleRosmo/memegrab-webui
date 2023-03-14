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
    axios.get(info.url).then((response) => {
      const rows = response.data.map((row) => {
        const cells = Object.values(row).map((cell) => {
          return (
            <td
              className="px-6 py-2 max-w-sm overflow-hidden \
          overflow-ellipsis hover:h-fit "
            >
              {cell}
            </td>
          );
        });
        return <tr className={rowStyle}>{cells}</tr>;
      });
      setRows(rows);
    });
  }, []);

  const heading = info.headers.map((col) => (
    <th scope="col" className="px-6 py-3">
      {col}
    </th>
  ));

  return (
    <div className="max-w-min h-fit m-2 shadow-md rounded-xl bg-gray-300 overflow-auto overscroll-none">
      <span className="w-full table-caption p-2 font-bold">{info.title}</span>
      <table className="text-sm text-left text-gray-200">
        <thead className="text-xs text-gray-300 uppercase bg-gray-700">
          <tr>{heading}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <hr className="my-3 border-0" />
    </div>
  );
};

export default Table;

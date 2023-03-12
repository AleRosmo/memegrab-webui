import React, { useState, useEffect } from "react";
import axios from "axios";

const rowStyle =
  "bg-gray-400 text-gray-700 border-b border-gray-700 hover:bg-gray-200 \
                hover:transition-colors duration-150 hover:duration-150 first:text-bold ";

const dataStyle = "px-6 py-2";

const headerStyle = "px-6 py-3";

// TODO: Change name 'endpoint' fa caca'
const Table = ({ info }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get(info.url).then((res) => {
      const tableRows = res.data.map((row) => {
        const cells = Object.values(row).map((cell) => {
          return <td className={dataStyle}>{cell}</td>;
        });

        return <tr className={rowStyle}>{cells}</tr>;
      });
      setRows(tableRows);
    });
  }, []);

  // const row = rows.data.map((_row) => {
  //   <td className={dataStyle}>{_row}</td>;
  // });

  const heading = info.headers.map((col) => (
    <th scope="col" className={headerStyle}>
      {col}
    </th>
  ));

  return (
    <div className="w-fit h-fit m-2 shadow-md rounded-xl bg-gray-300">
      <span className="w-full table-caption p-2 font-bold">{info.title}</span>
      <table className="table-auto text-sm text-left text-gray-200">
        <thead className="text-xs text-gray-300 uppercase bg-gray-700">
          <tr>{heading}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../Pagination/Pagination";

const rowStyle =
	"bg-gray-400 text-gray-700 border-b border-gray-700 \
    hover:bg-gray-200 hover:transition-colors duration-150 hover:duration-150";

const dataStyle = "";
const headerStyle = "";
let PageSize = 10;

// TODO: Change name 'endpoint', fa cagare
// TODO: Break down in smaller components
const Table = ({ info }) => {
	const [data, setData] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [rows, setRows] = useState();

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		if (data) {
			return data.slice(firstPageIndex, lastPageIndex);
		}
		return [];
	}, [currentPage, data]);

	const heading = info.headers.map((col, i) => (
		<th key={i} scope='col' className='px-6 py-3'>
			{col}
		</th>
	));

	useEffect(() => {
		axios.get(info.url, { withCredentials: true }).then((response) => {
			setData(response.data);
		});
	}, []);

	const makeRows = (data) => {
		if (data.length > 0) {
			return data.map((row, i) => (
				<tr key={i} className={rowStyle}>
					{makeRowCells(Object.values(row))}
				</tr>
			));
		}
		return [];
	};

	const makeRowCells = (row) => {
		return row.map((cell, i) => (
			<td
				key={i}
				className='px-6 py-2 max-w-sm overflow-hidden overflow-ellipsis hover:h-fit'>
				{cell}
			</td>
		));
	};

	useEffect(() => {
		const rows = makeRows(currentTableData);
		setRows(rows);
	}, [currentTableData]);

	return (
		<div className='mt-2 bg-gray-700 shadow-md rounded-xl overscroll-none'>
			<table className='table-fixed w-full text-sm text-left text-gray-200'>
				<thead className='text-xs text-gray-300 uppercase'>
					<tr>{heading}</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			{data ? (
				<Pagination
					currentPage={currentPage}
					totalCount={data.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			) : null}
		</div>
	);
};

export default Table;

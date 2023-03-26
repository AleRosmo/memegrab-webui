import React, { useState } from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";

const middleButtonStyle =
	"px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-white \
  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white";

const active = "bg-blue dark:bg-gray-500";
const inactive = "bg-white dark:bg-gray-800";

export default function Pagination({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}) {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	let lastPage = paginationRange[paginationRange.lenght - 1];

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}
	const onNext = () => {
		if (currentPage === lastPage) {
			return;
		}
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		if (currentPage === 1) {
			return;
		}
		onPageChange(currentPage - 1);
	};

	return (
		<nav aria-label='Page navigation example' className='h-fit p-2'>
			<ul className='inline-flex -space-x-px'>
				<li key='previous'>
					<button
						className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						onClick={onPrevious}
						disabled={currentPage === 1 ? true : false}>
						{"Previous"}
					</button>
				</li>
				{paginationRange.map((pageNumber) => {
					if (pageNumber === DOTS) {
						return <li className='pagination-item dots'>&#8230;</li>;
					}
					return (
						<li key={pageNumber}>
							<button
								className={
									pageNumber === currentPage
										? middleButtonStyle + active
										: middleButtonStyle + inactive
								}
								onClick={() => onPageChange(pageNumber)}>
								{pageNumber}
							</button>
						</li>
					);
				})}
				<li key='next'>
					<button
						className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						onClick={onNext}
						disabled={currentPage === lastPage ? true : false}>
						{"Next"}
					</button>
				</li>
			</ul>
		</nav>
	);
}

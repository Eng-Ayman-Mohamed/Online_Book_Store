import "./OrderTable.css";
import { useEffect, useState } from "react";
const OrderTable = ({ location }) => {
	let orders = [
		{
			id: "1",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "2",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "3",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "4",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "5",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "6",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "7",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
		{
			id: "8",
			quantity: "10",
			createdAt: "2022-12-23",
			updatedAt: "2022-12-24",
			publisher: "Jump",
			bookID: "23",
			confirmed: "No",
		},
	];
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	let size = 3;
	function changePage(currentPage) {
		let content = [];
		let start = (currentPage - 1) * size;
		let end = currentPage * size;
		for (let i = start; i < end && i < orders.length; i++) {
			content.push(
				<a className='tr' key={orders[i].id}>
					<div className='td'>{orders[i].id}</div>
					<div className='td'>{orders[i].quantity}</div>
					<div className='td'>{orders[i].createdAt}</div>
					<div className='td'>{orders[i].updatedAt}</div>
					<div className='td'>{orders[i].publisher}</div>
					<div className='td'>{orders[i].bookID}</div>
					<div className='td'>{orders[i].confirmed}</div>
				</a>,
			);
		}
		setContent(content);
		setPage(currentPage);
	}

	useEffect(() => {
		changePage(page);
	}, []);
	let notFound = orders == null ? true : false;

	return (
		<>
			{!notFound && (
				<div className='table'>
					<div className='th'>ID</div>
					<div className='th'>Quantity</div>
					<div className='th'>Created At</div>
					<div className='th'>Updated At</div>
					<div className='th'>Publisher</div>
					<div className='th'>Book ISBN</div>
					<div className='th'>Confirmed</div>
					{content.map((item) => item)}
				</div>
			)}
			<div className='changing-pages'>
				{page !== 1 && (
					<button
						onClick={() => {
							changePage(page - 1);
						}}>
						Previous
					</button>
				)}
				<p>{page}</p>
				{page * size < orders.length && (
					<button
						onClick={() => {
							changePage(page + 1);
						}}>
						Next
					</button>
				)}
			</div>
			{notFound && <p className='no-results'>No results</p>}
		</>
	);
};

export default OrderTable;

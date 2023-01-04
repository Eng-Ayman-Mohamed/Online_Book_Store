import "./CartTable.css";
import { useState, setError, useEffect } from "react";
import { environment } from "../Environment";
const CartTable = ({ cartId, location }) => {
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	let size = 5;

	function increase(id) {
		let res = "accepted";
		if (cartId !== undefined) {
			// if he presed  + then send to the backend the book id
			async function Addbook() {
				let result = await fetch(`${environment.env}/addToCart`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						customerid: location.state.id,
						bookid: id,
						cartid: cartId,
					}),
				});
				res = await result.json();
			}
			Addbook();

			if (res === "accepted") {
				setCount((old) => {
					return old + 1;
				});
			} else {
				setError(() => {
					return (
						<div className='Error'>No more items in stock !!</div>
					);
				});
			}
		}
	}
	function decrease(id) {
		if (cartId != undefined) {
			setCount((old) => {
				return old > 0 ? old - 1 : 0;
			});
			//  // if he presed  - then send to the backend the book id
			if (count !== 0) {
				async function Removebook() {
					let result = await fetch(
						`${environment.env}/removeFromCart`,
						{
							method: "POST",
							headers: {
								"Content-type": "application/json",
							},
							body: JSON.stringify({
								customerid: location.state.id,
								bookid: id,
								cartid: cartId,
							}),
						},
					);
					let res = await result.json();
				}
				Removebook();
			}
		}
	}
	let books = [
		{
			ISBN: "1",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "2",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "3",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "4",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "5",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "6",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "7",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "8",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "9",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "10",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "11",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "12",
			title: "Title1",
			year: "2022",
			category: "fiction",
			price: 123,
			amount: 123,
			publisher: "Jump",
		},
	];

	function changePage(currentPage) {
		let content = [];
		let start = (currentPage - 1) * size;
		let end = currentPage * size;
		for (let i = start; i < end && i < books.length; i++) {
			content.push(
				<a className='tr' key={books[i].ISBN}>
					<div className='td'>{books[i].ISBN}</div>
					<div className='td'>{books[i].title}</div>
					<div className='td'>{books[i].year}</div>
					<div className='td'>{books[i].category}</div>
					<div className='td'>{books[i].price}</div>
					<div className='td'>{books[i].amount}</div>
					<div className='td'>{books[i].publisher}</div>
					<div className='td'>
						<div className='quantity'>
							<button
								id='inc'
								onClick={() => increase(books[i].ISBN)}>
								+
							</button>
							<p>{count}</p>
							<button
								id='dec'
								onClick={() => decrease(books[i].ISBN)}>
								-
							</button>
						</div>
					</div>
				</a>,
			);
		}
		setContent(content);
		setPage(currentPage);
	}

	useEffect(() => {
		changePage(page);
	}, []);
	let notFound = books == null ? true : false;

	return (
		<>
			{!notFound && (
				<div className='book-table'>
					<div className='th'>ISBN</div>
					<div className='th'>Title</div>
					<div className='th'>Year</div>
					<div className='th'>Category</div>
					<div className='th'>Price</div>
					<div className='th'>Amount</div>
					<div className='th'>Publisher</div>
					<div className='th'>Purchase</div>
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
				{page * size < books.length && (
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

export default CartTable;

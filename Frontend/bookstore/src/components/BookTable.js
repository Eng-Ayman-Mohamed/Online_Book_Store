import "./BookTable.css";
import { useState, setError } from "react";
import { environment } from "../Environment";
const BookTable = ({ /*books*/ cartId, location }) => {
	const [count, setCount] = useState(0);
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
	const [page, setPage] = useState(1);
	let content = [];
	let size = 20;
	let start = (page - 1) * size;
	let end = page * size;

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
	function changePage() {
		content = [];
		let start = (page - 1) * size;
		let end = page * size;
		for (let i = start; i < end; i++) {
			content.push(
				<a className='tr' href='/' key={books[i].ISBN}>
					<div className='td'>{books[i].ISBN}</div>
					<div className='td'>{books[i].title}</div>
					<div className='td'>{books[i].year}</div>
					<div className='td'>{books[i].category}</div>
					<div className='td'>{books[i].price}</div>
					<div className='td'>{books[i].amount}</div>
					<div className='td'>{books[i].publisher}</div>
				</a>,
			);
		}
	}

	let notFound = books == null ? true : false;

	return (
		<>
			{!notFound && (
				<div className='table'>
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
							setPage(page - 1);
							changePage();
						}}>
						Previous
					</button>
				)}
				<p>{page}</p>
				{page * size < books.length && (
					<button
						onClick={() => {
							setPage(page + 1);
							changePage();
						}}>
						Next
					</button>
				)}
			</div>
			{notFound && <p className='no-results'>No results</p>}
		</>
	);
};

export default BookTable;

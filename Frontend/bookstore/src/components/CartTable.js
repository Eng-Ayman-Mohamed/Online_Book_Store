import "./CartTable.css";
import { useState, setError, useEffect } from "react";
import { environment } from "../Environment";
const CartTable = ({ books, cartId, location }) => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	let size = 20;
	books.forEach((book) => {
		book.count = 0;
	});
	function increase(id) {
		let res = "accepted";
		if (cartId !== undefined) {
			// if he presed  + then send to the backend the book id
			async function Addbook() {
				let result = await fetch(
					`${environment.Host}/customer/addToCart`,
					{
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify({
							customerid: cartId,
							bookid: id,
							cartid: cartId,
						}),
					},
				);
				res = await result.json();
			}
			Addbook();

			if (res === "accepted") {
				books.forEach((book) => {
					if (book.book_ISBN === id) {
						book.count++;
					}
				});
			} else {
				setError(() => {
					return (
						<div className='Error'>No more items in stock !!</div>
					);
				});
			}
		}
		changePage(page);
	}
	function decrease(id) {
		let count = 0;
		if (cartId !== undefined) {
			books.forEach((book) => {
				if (book.book_ISBN === id) {
					book.count = book.count > 0 ? book.count - 1 : 0;
					count = book.count;
				}
			});
			if (count !== 0) {
				async function Removebook() {
					let result = await fetch(
						`${environment.Host}/removeFromCart`,
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
		changePage(page);
	}

	function changePage(currentPage) {
		console.log(books);
		let content = [];
		let start = (currentPage - 1) * size;
		let end = currentPage * size;
		for (let i = start; i < end && i < books.length; i++) {
			content.push(
				<a className='tr' key={books[i].book_ISBN}>
					<div className='td'>{books[i].book_ISBN}</div>
					<div className='td'>{books[i].title}</div>
					<div className='td'>{books[i].publication_Year}</div>
					<div className='td'>{books[i].category}</div>
					<div className='td'>{books[i].price}</div>
					<div className='td'>{books[i].amount}</div>
					<div className='td'>{books[i].publisher}</div>
					<div className='td'>
						<div className='quantity'>
							<button
								id='inc'
								onClick={() => increase(books[i].book_ISBN)}>
								+
							</button>
							<p>{books[i].count}</p>
							<button
								id='dec'
								onClick={() => decrease(books[i].book_ISBN)}>
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

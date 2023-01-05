import "./BookTable.css";
import { useState, setError, useEffect } from "react";
import { environment } from "../Environment";
import { useNavigate, useLocation } from "react-router-dom";
const BookTable = ({ books, cartId, location }) => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	let size = 20;
	books.forEach((book) => {
		book.count = 0;
	});
    let nav = useNavigate();
    function Modify(book){
        nav('/updatebook', {state: book})
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
                        <button
								id='inc'
								onClick={() => Modify(books[i])}>
								Modify
							</button>
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

export default BookTable;

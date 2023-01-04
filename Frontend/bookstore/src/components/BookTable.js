import "./BookTable.css";
const BookTable = () => {
	let books = [
		{
			ISBN: "1",
			title: "title1",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "2",
			title: "title2",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "3",
			title: "title3",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "4",
			title: "title4",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "5",
			title: "title5",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
		{
			ISBN: "6",
			title: "title6",
			year: "1999",
			category: "Fiction",
			price: 12,
			amount: 123,
			publisher: "Jump",
		},
	];
	return (
		<div className='table'>
			<div className='th'>ISBN</div>
			<div className='th'>Title</div>
			<div className='th'>Year</div>
			<div className='th'>Category</div>
			<div className='th'>Price</div>
			<div className='th'>Amount</div>
			<div className='th'>Publisher</div>
			{books.map((book) => (
				<a className='tr' href='/' key={book.ISBN}>
					<div className='td'>{book.ISBN}</div>
					<div className='td'>{book.title}</div>
					<div className='td'>{book.year}</div>
					<div className='td'>{book.category}</div>
					<div className='td'>{book.price}</div>
					<div className='td'>{book.amount}</div>
					<div className='td'>{book.publisher}</div>
				</a>
			))}
		</div>
	);
};

export default BookTable;

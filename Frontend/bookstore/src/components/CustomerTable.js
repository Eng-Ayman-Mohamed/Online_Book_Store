import "./CustomerTable.css";
import { useEffect, useState } from "react";
const CustomerTable = ({ location }) => {
	let customers = [
		{
			userName: "user1",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user2",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user3",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user4",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user5",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user6",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
		{
			userName: "user7",
			phone: "+1234",
			fName: "John",
			lName: "Doe",
			email: "JD@mail.com",
			promoted: false,
			address: "Home of Doe",
		},
	];
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	let size = 3;
	function changePage(currentPage) {
		let content = [];
		let start = (currentPage - 1) * size;
		let end = currentPage * size;
		for (let i = start; i < end && i < customers.length; i++) {
			content.push(
				<a className='tr' key={customers[i].userName}>
					<div className='td'>{customers[i].userName}</div>
					<div className='td'>{customers[i].phone}</div>
					<div className='td'>{customers[i].fName}</div>
					<div className='td'>{customers[i].lName}</div>
					<div className='td'>{customers[i].email}</div>
					<div className='td'>{customers[i].address}</div>
					<div className='td'>
						{!customers[i].promoted && (
							<button>Promote To manager</button>
						)}
						{customers[i].promoted && <p>Already Promoted</p>}
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
	let notFound = customers == null ? true : false;

	return (
		<>
			{!notFound && (
				<div className='table'>
					<div className='th'>Username</div>
					<div className='th'>Phone</div>
					<div className='th'>First Name</div>
					<div className='th'>Last Name</div>
					<div className='th'>Email</div>
					<div className='th'>Address</div>
					<div className='th'>Manager</div>
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
				{page * size < customers.length && (
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

export default CustomerTable;

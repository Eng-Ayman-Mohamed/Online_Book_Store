import "./CustomerTable.css";
import React, { useEffect, useState } from "react";
const CustomerTable = ({ location }) => {
	let [customers,setcustomers]=React.useState([]);
	useEffect(() => {
        let res;
        async function getorders() {
            let result = await fetch(
                `${environment.Host}/manager/viewCustomers`,
                {
                    method: "get",
                    headers: {
                        "Content-type": "application/json",
                    },
                },
            );
            res = await result.json();
            setcustomers(res);
        }
        getorders();
	}, []);
	
	function Promote(customer){
        let res;
        async function confirmorder() {
            let result = await fetch(
                `${environment.Host}/manager/promoteCustomer`,
                {
                    method: "put",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        customer: customer,
                    }),
                },
            );
            res = await result.json();
        }
        confirmorder();
    }
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
							<button onClick={()=>Promote(customers[i])}>Promote To manager</button>
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

import "./PlaceOrder.css";
import React, { useEffect, useState } from "react";
import { environment } from "../Environment";
const CustomerTable = ({ location }) => {

    let [customers,getcustomers]=React.useState([]); 
    useEffect(() => {
        let res;
        async function confirmorder() {
            let result = await fetch(
                `${environment.Host}/manager/viewOrders`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                },
            );
            res = await result.json();

        }
        confirmorder();
	}, []);

    function Confirmorder(id){
        let res;
        async function confirmorder() {
            let result = await fetch(
                `${environment.Host}/manager/confirmOrder`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        orderID: id,
                    }),
                },
            );
            res = await result.json();
        }
        confirmorder();
    }
    function Removemorder(id){
        let res;
        async function removeorder() {
            let result = await fetch(
                `${environment.Host}/manager/removeOrder`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        orderID: id,
                    }),
                },
            );
            res = await result.json();
        }
        removeorder();
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
				<a className='tr' key={customers[i].Id}>
					<div className='td'>{customers[i].Id}</div>
                    <div className='td'>{customers[i].Quantity}</div>
					<div className='td'>{customers[i].createdAt}</div>
					<div className='td'>{customers[i].updatedAt}</div>
					<div className='td'>{customers[i].Publisher}</div>
					<div className='td'>
						{!customers[i].confirmed && (
							<button onClick={()=>Confirmorder(customers[i].Id)}>Confirm</button>
						)}
						{customers[i].confirmed && <p>Confirmed</p>}
					</div>
                    <div className='td'>
						{!customers[i].remove && (
							<button onClick={()=>Removemorder(customers[i].Id)}>Remove</button>
						)}
						{customers[i].remove && <p>Removed</p>}
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
					<div className='th'>ID</div>
					<div className='th'>Quantity</div>
					<div className='th'>created At</div>
					<div className='th'>updatedAt</div>
					<div className='th'>Publisher</div>
					<div className='th'>Cofirm Order</div>
                    <div className='th'>Remove Order</div>
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

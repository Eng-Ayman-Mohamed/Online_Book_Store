import React from "react";
import "./Customerpage.css";
import BookCard from "./components/BookCard";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { environment } from "../Environment";
import Header from "./components/Header";
export default function Customerpage() {
	let [someBooks, setsomeBooks] = React.useState([]);
	let Books = [];

	const NAV = useNavigate();
	const location = useLocation();

	//get some Books from the stock
	React.useEffect(() => {
		async function getBooks() {
			let result = await fetch(`${environment.Host}/customer/getBooks`, {
				method: "get",
				headers: {
					"Content-type": "application/json",
				},
			});
			let res = await result.json();
			setsomeBooks(res);
		}
		getBooks();
	}, []);

	for (let i = 0; i < 20 && i < someBooks.length; i++) {
		let ordobj = {
			name: someBooks[i].title,
			price: someBooks[i].price,
			id: someBooks[i].book_ISBN,
			image_location: "../Images/pic4.png",
		};
		Books.push(ordobj);
	}

	let BookHtml;

	BookHtml = Books.map((item) => {
		return (
			<BookCard
				img={item.image_location}
				name={item.name}
				price={item.price}
				id={item.id}
				location={location}
				cartId={location.state.username}
			/>
		);
	});

	function Cart() {
		//nav to Cart
		NAV("/", { state: location.state.id });
	}
	return (
		<div className='Main'>
			<Header cartid={location.state.username} />
			<div className='Explore'>
				<div className='container2'>{BookHtml}</div>
			</div>
			<div className='Cart' onClick={Cart}>
				<BsFillCartCheckFill />
			</div>
		</div>
	);
}

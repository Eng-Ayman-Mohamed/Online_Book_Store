import React from "react";
import {
	BsBoxArrowLeft,
	BsFillPersonFill,
	BsFillCartCheckFill,
	BsFillFilterCircleFill,
	BsSearch,
} from "react-icons/bs";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ cartid }) {
	let [search, setsearch] = React.useState("Title");
	function search_options(e) {
		setsearch(e.target.value);
	}
	const NAV = useNavigate();

	function Profile() {
		//nav to profile
		NAV("/Customerpage/Profile", { state: cartid });
	}
	function Cart() {
		//nav to Cart
		NAV("/", { state: cartid });
	}
	function Logout() {
		NAV("/Signin");
	}
	function goToSearch() {
		NAV("/search", { state: cartid });
	}
	return (
		<div className='CHeader'>
			<div onClick={Profile} className='Cart_2'>
				<BsFillPersonFill />
			</div>
			<div onClick={Cart} className='Cart_2'>
				<BsFillCartCheckFill />
			</div>
			<div onClick={() => goToSearch()} className='Cart_2'>
				<BsSearch />
			</div>
			<input className='search' placeholder={"search by " + search} />
			<select
				onChange={search_options}
				className='select'
				name='Search'
				id='search'>
				<option value='Title'>Title</option>
				<option value='author'>author</option>
				<option value='category'>category</option>
				<option value='ISBN'>ISBN</option>
				<option value='publisher'>publisher</option>
			</select>
			<div onClick={Logout} className='Cart_1'>
				<BsBoxArrowLeft />
			</div>
		</div>
	);
}

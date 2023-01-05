import React from "react";
import {
	BsBoxArrowLeft,
	BsFillPersonFill,
	BsFillCartCheckFill,
	BsSearch,
} from "react-icons/bs";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ cartid,location }) {
	let [keyword, setKeyword] = React.useState("");
	let [searchType, setSearchType] = React.useState("Title");
	function search_options(e) {
		setSearchType(e.target.value);
	}
	const NAV = useNavigate();

	function Profile() {
		//nav to profile
		console.log(location)
		NAV("/Customerpage/Profile", { state: location.state });
	}
	function Cart() {
		//nav to Cart
		NAV("/Cart", { state: cartid });
	}
	function Logout() {
		NAV("/Signin");
	}
	function goToSearch() {
		NAV(`/search?${keyword}&${searchType}`, {
			state: { cartid, keyword, searchType },
		});
	}
	function searchKeyword(e) {
		setKeyword(e.target.value);
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
			<input
				className='search'
				placeholder={"search by " + searchType}
				onChange={(e) => searchKeyword(e)}
			/>
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

import BookTable from "../components/BookTable";
import { useEffect, useState } from "react";
import { environment } from "../Environment";
import { useLocation } from "react-router-dom";
import Header from "../CustomerPage/components/Header";
const Search = () => {
	const location = useLocation();
	let words = location.search.split("?")[1].split("&");
	const [keyword, setKeyword] = useState(words[0]);
	const [type, setType] = useState(words[1]);
	if (type === "Title") {
		setType("searchByTitle");
	} else if (type === "author") {
		setType("searchByAuthor");
	} else if (type === "category") {
		setType("searchByCategory");
	} else if (type === "ISBN") {
		setType("searchByISBN");
	} else if (type === "publisher") {
		setType("searchByPublisher");
	} else if (type === "price") {
		setType("searchByCategory");
	}
	//get some Books from the stock
	const [response, setResponse] = useState(null);
	useEffect(() => {
		console.log(location);
		async function getBooks() {
			await fetch(`${environment.Host}/customer/${type}/${keyword}`, {
				method: "get",
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => setResponse(data));
		}
		getBooks();
	}, []);
	//  TODO: Re-search in search
	return (
		<>
			<Header cartid={location.state.username} />
			{response != null && (
				<Mangerbooktable books={response}  />
			)}
		</>
	);
};

export default Search;

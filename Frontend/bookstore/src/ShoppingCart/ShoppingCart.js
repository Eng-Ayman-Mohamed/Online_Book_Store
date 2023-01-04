import CartTable from "../components/CartTable";
import { useEffect, useState } from "react";
import { environment } from "../Environment";
import Header from "../CustomerPage/components/Header";
import { useLocation } from "react-router-dom";

const ShoppingCart = () => {
	const [response, setResponse] = useState(null);
	const location = useLocation();
	useEffect(() => {
		console.log(location);
		console.log(response != null);
		async function getBooks() {
			await fetch(
				`${environment.Host}/customer/viewCart/${location.state}`,
				{
					method: "get",
					headers: {
						"Content-type": "application/json",
					},
				},
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.status === 200) {
						setResponse(data);
					}
				});
		}
		getBooks();
	}, []);
	return (
		<>
			<Header cartid={location.state} />
			{response != null && (
				<CartTable
					books={response}
					cartID={location.state}
					location={location}
				/>
			)}
		</>
	);
};

export default ShoppingCart;

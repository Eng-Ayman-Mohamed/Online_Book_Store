import CartTable from "../components/CartTable";

const ShoppingCart = ({ cartID, location }) => {
	return (
		<>
			<CartTable cartID={cartID} location={location} />
		</>
	);
};

export default ShoppingCart;

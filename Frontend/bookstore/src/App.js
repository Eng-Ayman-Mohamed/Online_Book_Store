import "./App.css";
import Signin from "./signinpage/Signin";
import SignUp from "./signupPage/SignUp";
import Payment from "./paymentpage/Payment";
import Profile from "./profilePage/Profile";
import Customerpage from "./CustomerPage/Customerpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./SearchPage/Search";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import CustomerTable from "./components/CustomerTable";
import PlaceOrder from "./PlaceOrder/PlaceOrder"
function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Signin />} />
				<Route path='/Customerpage' element={<Customerpage />} />
				<Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/homePage/Profile' element={<Profile />} />
				<Route path='/Search' element={<Search />} />
				<Route path='/Cart' element={<ShoppingCart />} />
				<Route path='/CustomerTable' element={<CustomerTable />} />
				<Route path='/PlaceOrder' element={<PlaceOrder />} />
				
			</Routes>
		</Router>
	);
}

export default App;

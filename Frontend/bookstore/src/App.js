import "./App.css";
import Signin from "./signinpage/Signin";
import SignUp from "./signupPage/SignUp";
import Payment from "./paymentpage/Payment";
import Profile from "./profilePage/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Signin />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/homePage/Profile' element={<Profile />} />
				<Route path='/signin' element={<Signin />} />
			</Routes>
		</Router>
	);
}

export default App;

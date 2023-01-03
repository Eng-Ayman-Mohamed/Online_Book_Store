import './App.css';
import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp';
import Customerpage from './CustomerPage/Customerpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Customerpage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );

}



export default App;
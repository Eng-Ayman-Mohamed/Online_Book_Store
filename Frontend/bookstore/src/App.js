import './App.css';
import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );

}



export default App;
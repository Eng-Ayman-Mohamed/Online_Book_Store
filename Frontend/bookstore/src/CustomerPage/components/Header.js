import React from 'react';
import {BsBoxArrowLeft , BsFillPersonFill, BsFillCartCheckFill } from 'react-icons/bs';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let [search, setsearch]= React.useState("name");
    function search_options(e){
        setsearch(e.target.value);
        console.log(search);
    }
    const NAV = useNavigate();
    function Logout(){
       NAV('/Signin');
    }
    function Profile(){
        //nav to profile
        NAV('/', {state:location.state.id});
    }
    function Cart(){
        //nav to Cart
       NAV('/', {state:location.state.id});
    }

return(
          
          <div className='CHeader'>
                <div onClick={Profile} className='Cart_2'>< BsFillPersonFill /></div>
                <div  onClick={Cart} className='Cart_2'><BsFillCartCheckFill /></div>
                <input className='search' placeholder={"search by "+search}/>
                <select onChange={search_options}  className='select' name="Search" id="search">
                <option value="name">name</option>
                <option value="id">id</option>
                <option value="type">type</option>
                <option value="Author">Author</option>
                </select>
                <div  onClick={Logout} className='Cart_1'><BsBoxArrowLeft /></div>
          </div>
   )}
import React from 'react';
import {BsBoxArrowLeft , BsFillPersonFill, BsFillCartCheckFill, BsFillFilterCircleFill } from 'react-icons/bs';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    let [search, setsearch]= React.useState("Title");
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
       // NAV('/', {state:location.state.id});
    }
    function Cart(){
        //nav to Cart
      // NAV('/', {state:location.state.id});
    }
    function start_shopping(){
        
        /*async function start_shopping() {
            let result = await fetch(`${environment.env}/getcartid`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                {
                  customerid:props.location.state.id
                }
              )
            });
            let res = await result.json();
            cartid = res;
        }
        start_shopping();*/
    }

return(
          
          <div className='CHeader'>
                <div onClick={Profile} className='Cart_2'>< BsFillPersonFill /></div>
                <div  onClick={Cart} className='Cart_2'><BsFillCartCheckFill /></div>
                <div  onClick={start_shopping} className='Cart_2'>< BsFillFilterCircleFill /></div>
                <input className='search' placeholder={"search by "+search}/>
                <select onChange={search_options}  className='select' name="Search" id="search">
                <option value="Title">Title</option>
                <option value="author">author</option>
                <option value="category">category</option>
                <option value="ISBN">ISBN</option>
                <option value="publisher">publisher</option>
                </select>
                <div  onClick={Logout} className='Cart_1'><BsBoxArrowLeft /></div>
          </div>
   )}
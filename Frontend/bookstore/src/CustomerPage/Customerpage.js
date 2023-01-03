import React from 'react';
import './Customerpage.css';
import BookCard from './components/BookCard';
import { BsFillCartCheckFill } from 'react-icons/bs';
import {BsBoxArrowLeft , BsFillPersonFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Customerpage() {
    let [someBooks, setsomeBooks] = React.useState([]);
    let [Books, setBooks] = React.useState([]);
    const NAV = useNavigate();
    const location = useLocation();

    //get some Books from the stock
   /* React.useEffect(() => {
        async function GetBooks() {
            let result = await fetch(`${environment.env}/Books`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let res = await result.json();
            setsomeBooks(res);
        }
        GetBooks();
    }, []);*/
    
        for(let i = 0 ; i < someBooks.length; i++){
            let ordobj={name:someBooks[i].name,price:someBooks[i].price,id:someBooks[i].id,image_location:"../Images/pic4.png"};
            Books.push(ordobj);
        }
  
    let BookHtml = Books.map((item) => {
        return (
            <BookCard
                img={item.image_location}
                name={item.name}
                price={item.price}
                id ={item.id}
                available={item.available_amount}
            />
        );
    })
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
    return (
        <div className="Main">
            <div className='CHeader'>
                     <div onClick={Profile} className='Cart_2'>< BsFillPersonFill /></div>
                    <div  onClick={Cart} className='Cart_2'><BsFillCartCheckFill /></div>
                    <input className='search' placeholder='Search'/>
                    <div  onClick={Logout} className='Cart_1'><BsBoxArrowLeft /></div>
            </div>
            <div className="Explore">
                <div className="container2">
                    {BookHtml}
                </div>
                <div className="OrderFooter">
                    <div className='contain'>
                        <div id='OrderNow'>
                            <button onClick={Cart}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Cart' onClick={() => { document.getElementById("OrderNow").scrollIntoView({ behavior: 'smooth' }) }}><BsFillCartCheckFill /></div>

        </div>
    );
}
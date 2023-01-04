import React from 'react';
import './Customerpage.css';
import BookCard from './components/BookCard';
import Header from './components/Header';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import {BsBoxArrowLeft , BsFillPersonFill, BsFillFilterCircleFill } from 'react-icons/bs';
import {environment} from '../Environment';
export default function Customerpage() {
    let [someBooks, setsomeBooks] = React.useState([]);
    let [Books, setBooks] = React.useState([]);

    Books.push( { id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( { id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( { id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    Books.push( {id : 1 ,image_location:"../Images/pic4.png", 
    name :"Book1",price:"20", description:"very good", available_amount:"15"});
    const NAV = useNavigate();
    const location = useLocation();

    //get some Books from the stock
   /* React.useEffect(() => {
        async function getBooks() {
            let result = await fetch(`${environment.Host}/customer/getBooks`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let res = await result.json();
            setsomeBooks(res);
        }
        getBooks();
    }, []);
    
        for(let i = 0 ; i < 20; i++){
            let ordobj={name:someBooks[i].title,price:someBooks[i].price,id:someBooks[i].book_ISBN,image_location:"../Images/pic4.png"};
            Books.push(ordobj);
        }

        function Logout(){
            NAV('/Signin');
         }
         function Profile(){
             //nav to profile
             NAV('/Customerpage/Profile', {state:location.state.id});
         }
         let [cartid, setcartid]=React.useState();
         let BookHtml ;
        function start_shopping(){
            setcartid(5);
            async function start_shopping() {
                let result = await fetch(`${environment.env}/getcartid`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(
                    {
                      customerid:location.state.id
                    }
                  )
                });
                let res = await result.json();
               cartid=  res;
            }
            start_shopping();

        }
        BookHtml = Books.map((item) => {
            console.log(cartid);
            return (
                <BookCard
                    img={item.image_location}
                    name={item.name}
                    price={item.price}
                    id ={item.id}
                    location={location}
                    cartId = {cartid}
                />
            );
        })

    function Cart(){
        //nav to Cart
      //  NAV('/', {state:location.state.id});
    }
    return (
        <div className="Main">
            {header}
            <div className="Explore">
                <div className="container2">
                    {BookHtml}
                </div>
                </div>
            <div className='Cart' onClick={Cart}><BsFillCartCheckFill /></div>

        </div>
    );
}
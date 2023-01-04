import React from 'react';
import './Customerpage.css';
import BookCard from './components/BookCard';
import Header from './components/Header';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

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
    let [cartid, setcartid] = React.useState();

    //get some Books from the stock
    /*React.useEffect(() => {
        async function getBooks() {
            let result = await fetch(`${environment.env}/getBooks`, {
                method: "get",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    {
                      customerid:location.state.id,
                    })
            });
            let res = await result.json();
            setsomeBooks(res);
        }
        getBooks();
    }, []);
    
        for(let i = 0 ; i < 20; i++){
            let ordobj={name:someBooks[i].name,price:someBooks[i].price,id:someBooks[i].id,image_location:"../Images/pic4.png"};
            Books.push(ordobj);
        }*/
    let BookHtml = Books.map((item) => {
        return (
            <BookCard
                img={item.image_location}
                name={item.name}
                price={item.price}
                id ={item.id}
                location={location}
            />
        );
    })
    function Cart(){
        //nav to Cart
      //  NAV('/', {state:location.state.id});
    }
    return (
        <div className="Main">
             <Header
        location={location}
        />
            <div className="Explore">
                <div className="container2">
                    {BookHtml}
                </div>
                </div>
            <div className='Cart' onClick={Cart}><BsFillCartCheckFill /></div>

        </div>
    );
}
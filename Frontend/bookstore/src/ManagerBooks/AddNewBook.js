import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { environment } from "../Environment";


function AddNewBook() {
  let nav = useNavigate();
  const location = useLocation();
  const [Error, setError] = React.useState(false);
  let [info, setInfo] = React.useState({
    book_ISBN: "",
    title: "",
    publication_Year: "",
    category: "",
    price: "",
    amount:"",
    publisher:""
  });

  let handleChange = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(info);
    let result = await fetch(`${environment.Host}/manager/addBook`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    let message = await result.json();
    if(message == true){
        window.alert("book successfully added");
    }else{
        setError(true);
    }
  };

  return (
    <div className="sign-up">
      <div className="form-container">
        <h1 className="sign-up-header">Add new book</h1>
        <form onSubmit={handleSubmit}>
          <div className="contain">
            <input
              type="text"
              placeholder="book_ISBN"
              name="book_ISBN"
              required
              value={info.book_ISBN}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              type="text"
              placeholder="book title"
              name="title"
              required
              value={info.title}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              type="text"
              placeholder="publication_Year"
              name="publication_Year"
              required
              value={info.publication_Year}
              onChange={handleChange}
            />
          </div>
          
          <div className="contain">
            <input
              type="text"
              placeholder="category"
              name="category"
              required
              value={info.category}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              type="text"
              placeholder="price"
              name="price"
              required
              value={info.price}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              type="text"
              placeholder="amount"
              name="amount"
              required
              value={info.amount}
              onChange={handleChange}
            />
          </div>
          <div className="contain">
            <input
              type="text"
              placeholder="publisher"
              name="publisher"
              required
              value={info.publisher}
              onChange={handleChange}
            />
          </div>
          <input
            className="btn-submit"
            type="submit"
            value="Add Book"
            name="Sign Up"
          />
        </form>
      </div>
      {Error && (
        <div className="ErrorPOP">
          <div className="PopUP">
            <p>Book hasn't been added !!</p>
            <button
              onClick={() => {
                setError(() => {
                  return false;
                });
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewBook;

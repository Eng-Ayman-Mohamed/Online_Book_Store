package com.example.BookStore.Repository;

import com.example.BookStore.Models.Items;
import com.example.BookStore.Models.shopping_cart;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CartRepo {

    private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }
//id, userName, amountRequired, total_price, state, Date
    // create cart and return cart id if  not exist or return cart id if exist
        public int createCart(String username) throws SQLException {
            String query = "SELECT * FROM shopping_cart WHERE userName = '" + username + "' AND state = 'not paid'";
            ResultSet resultSet = connection.getStatement().executeQuery(query);
            if (resultSet.next()) {
                return resultSet.getInt("id");
            } else {
                query = "INSERT INTO shopping_cart (userName, amountRequired, total_price, state, Date) VALUES " +
                        "('" + username + "', 0, 0, 'not paid', NOW())";
                connection.getStatement().executeUpdate(query);
                query = "SELECT * FROM shopping_cart WHERE userName = '" + username + "' AND state = 'not paid'";
                resultSet = connection.getStatement().executeQuery(query);
                if (resultSet.next()) {
                    return resultSet.getInt("id");
                }



            }
            return -1;

        }





    public boolean addBookToItemsAndCart(String ISBN, int cartId) throws SQLException {

        String query;
        int pr;
        try {
            //get price of book
            query = "SELECT *FROM Book WHERE book_ISBN = '" + ISBN + "'";
            ResultSet r = connection.getStatement().executeQuery(query);
            if (r.next()){
                pr = r.getInt(5);
            }else {
                return false;
            }

            //update amount of book
            if (r.getInt("amount") == 0){
                return false;
            }
            query = "UPDATE book SET amount = amount - 1 WHERE book_ISBN = '" + ISBN + "'";
            connection.getStatement().executeUpdate(query);
            //check if cart contain this item => increment it
            query = "SELECT *FROM items WHERE cart_id = " + cartId + " AND bookId = '" + ISBN + "'";
            //cart has this item
            if (connection.getStatement().executeQuery(query).next()){
                System.out.println("yes");
                query = "UPDATE items SET amountRequired = amountRequired + 1, price = price + " + pr + " WHERE cart_id = " + cartId + " AND bookId = '" + ISBN + "'";
                connection.getStatement().executeUpdate(query);
            } else {

                query = "INSERT INTO items VALUES ('" + ISBN + "', " + cartId + ", " + 1 + "," + pr + ")";
                connection.getStatement().executeUpdate(query);
            }
            query = "UPDATE shopping_cart SET total_price =  total_price + " + pr + ", amountRequired = amountRequired + 1" + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
        return true;

        /*
        String query ;//= "INSERT INTO items VALUES (" + bookId + "," + cartId + "," + amount + ","+price+")";
        try {
         //   connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET amountRequired = amountRequired + " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET total_price = total_price + (SELECT price FROM book WHERE Book_ISBN = " + bookId + ") * " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
        */
    }
    public boolean removeBookFromItemsAndCart(String ISBN, int cartId) {

        String query;
        int pr;
        try {
            //get price of book
            query = "SELECT * FROM Book WHERE book_ISBN = '" + ISBN + "'";
            ResultSet r = connection.getStatement().executeQuery(query);
            if (r.next()){
                pr = r.getInt(5);
            }else {
                return false;
            }

            //check if cart contain this item => decrement amount amd price
            query = "SELECT * FROM Items WHERE cart_id = " + cartId + " AND bookId = '" + ISBN + "'";

            //cart has this item
            if (connection.getStatement().executeQuery(query).next()){
                query = "UPDATE Items SET amountRequired = amountRequired - 1, price = price - " + pr + " WHERE cart_id = " + cartId + " AND bookId = '" + ISBN + "'";
                connection.getStatement().executeUpdate(query);

                //update amount of book in Book relation
                query = "UPDATE Book SET amount = amount + 1 WHERE book_ISBN = '" + ISBN + "'";
                connection.getStatement().executeUpdate(query);

                query = "UPDATE shopping_cart SET total_price =  total_price - " + pr + ", amountRequired = amountRequired - 1" + " WHERE id = " + cartId;
                connection.getStatement().executeUpdate(query);

                query = "SELECT * FROM Items WHERE cart_id = " + cartId + " AND bookId = '" + ISBN + "'";
                ResultSet resultSet = connection.getStatement().executeQuery(query);
                if (resultSet.next()){
                    if (resultSet.getInt("amountRequired") == 0){
                        query = "DELETE FROM Items WHERE cart_id = " + cartId;
                        connection.getStatement().executeUpdate(query);
                    }
                }
            }

        }catch (Exception e){
            return false;
        }
        return true;

        /*
        String query = "DELETE FROM items WHERE BookId = " + bookId + " AND cart_id = " + cartId;
        try {
            connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET amountRequired = amountRequired - " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET total_price = total_price - (SELECT price FROM book WHERE Book_ISBN = " + bookId + ") * " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
         */
    }
    public boolean checkout_cart(int cartId) {
        String query = "UPDATE shopping_cart SET state = true WHERE id = " + cartId;
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }

    //shopping_cart
    //id, userName, amountRequired, total_price, state

    public shopping_cart getCart(int cartId) {
        String query = "SELECT * FROM shopping_cart WHERE id = " + cartId ;
        try {
            var resultSet = connection.getStatement().executeQuery(query);
            if (resultSet.next()) {
                shopping_cart cart = new shopping_cart();
                cart.setId(resultSet.getInt("id"));
                cart.setUserName(resultSet.getString("username"));
                cart.setAmountRequired(resultSet.getInt("amountRequired"));
                cart.setTotal_price(resultSet.getInt("total_price"));
                cart.setState(resultSet.getString("state"));
                cart.setDate(resultSet.getDate("date"));
                return cart;
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return null;
    }

}
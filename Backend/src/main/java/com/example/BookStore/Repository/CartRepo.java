package com.example.BookStore.Repository;

import com.example.BookStore.Models.shopping_cart;

import java.sql.SQLException;

public class CartRepo {

    private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    public int createCard(String username) {
        String query = "INSERT INTO shopping_cart VALUES (null, '" + username + "')";
        try {
            connection.getStatement().executeUpdate(query);
            query = "SELECT * FROM shopping_cart WHERE username = '" + username + "',0,0,false,"+new java.sql.Date(new java.util.Date().getTime())+")";
            return connection.getStatement().executeQuery(query).getInt("id");
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return -1;
    }
    public  boolean addBookToItemsAndCart(String bookId, int cartId, int amount, int price) {

        String query = "INSERT INTO items VALUES (" + bookId + "," + cartId + "," + amount + ","+price+")";
        try {
            connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET amountRequired = amountRequired + " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            query = "UPDATE shopping_cart SET total_price = total_price + (SELECT price FROM book WHERE Book_ISBN = " + bookId + ") * " + amount + " WHERE id = " + cartId;
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
    public boolean removeBookFromItemsAndCart(String bookId, int cartId, int amount, int price) {
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
        String query = "SELECT * FROM shopping_cart WHERE id = " + cartId + "'";
        try {
            var resultSet = connection.getStatement().executeQuery(query);
            if (resultSet.next()) {
                shopping_cart cart = new shopping_cart();
                cart.setId(resultSet.getInt("id"));
                cart.setUserName(resultSet.getString("username"));
                cart.setAmountRequired(resultSet.getInt("amountRequired"));
                cart.setTotal_price(resultSet.getInt("total_price"));
                cart.setState(String.valueOf(resultSet.getBoolean("state")));
                cart.setDate(resultSet.getDate("date"));
                return cart;
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return null;
    }


}

package com.example.BookStore.Repository;

import com.example.BookStore.Models.Items;
import com.example.BookStore.Models.shopping_cart;

import java.sql.SQLException;

public class CartRepo {

    private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    //shopping_cart
    //id, userName, amountRequired, total_price, state



    boolean create_cart(shopping_cart cart) throws SQLException {
        String query = "INSERT INTO shopping_cart VALUES ('" + cart.getUserName() + "', " + cart.getAmountRequired() + ", " + cart.getTotal_price() + ", 'not done')";
        connection.getStatement().executeUpdate(query);
        return true;
    }

    boolean increment_item(String ISBN, int cartId) {
        return true;
    }

    boolean decrement_item(String ISBN, int cartId){
        return true;
    }

    boolean confirm_cart(int cartId) {
        return true;
    }

    boolean delete_cart(int cartId) {
        return true;
    }
}

package com.example.BookStore.Repository;

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
        String query = "INSERT INTO shopping_cart VALUES ('" + cart.getUserName() + "', " + cart.getAmountRequired() + ", " + cart.getTotal_price() + ", '" + cart.isState() + "')";
        connection.getStatement().executeUpdate(query);
        return true;
    }


}

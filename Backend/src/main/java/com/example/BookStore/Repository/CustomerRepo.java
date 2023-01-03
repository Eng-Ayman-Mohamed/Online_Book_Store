package com.example.BookStore.Repository;

import com.example.BookStore.Models.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class CustomerRepo {
    DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    Customer Sign_in(String username, String password) throws SQLException {
        String query = query = "SELECT * FROM `Customer` WHERE username = '" + username + "' AND password = '" + password + "'";
        connection.connect();
        Statement statement = connection.getStatement();
        ResultSet resultSet = statement.executeQuery(query);
        if (resultSet.next()){
            Customer customer = new Customer();
            customer.setUserName(resultSet.getString(1));
            customer.setPhone(resultSet.getString(2));
            customer.setFname(resultSet.getString(3));
            customer.setLname(resultSet.getString(4));
            customer.setEmail(resultSet.getString(5));
            customer.setPassword(resultSet.getString(6));
            customer.setPromoted(resultSet.getInt(7));
            customer.setAddress(resultSet.getString(8));
            customer.setPromoteMN(resultSet.getString(9));
            return customer;
        }
        return null;
    }

    boolean Sign_up(Customer customer) throws SQLException {
        String query = "INSERT INTO `Customer`(`username`, `phone`, `FName`, `LName`, `email`," +
                " `password`, `promoted`, `address`, `promoteMN`) VALUES ('" + customer.getUserName() +
                "','" + customer.getPhone() + "','" + customer.getFname() + "','" + customer.getLname() + "','" +
                customer.getEmail() + "','" + customer.getPassword() + "'," + customer.getPromoted()
                + ",'" + customer.getAddress() + "','" + customer.getPromoteMN() + "')";
        connection.connect();
        Statement statement = connection.getStatement();
        return statement.execute(query);
    }
}

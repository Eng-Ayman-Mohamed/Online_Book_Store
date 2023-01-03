package com.example.BookStore.Repository;

import com.example.BookStore.Models.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class CustomerRepo {
    DBConnection connection = new DBConnection();

    Customer Sign_in(String username, String password, String user) throws SQLException {
        String query = query = "SELECT * FROM `Customer` WHERE username = '" + username + "' AND password = '" + password + "'";
        connection.connect();
        Statement statement = connection.getStatement();
        ResultSet resultSet = statement.executeQuery(query);
        if (resultSet.next()){
            Customer customer = new Customer();
            customer.setUserName(resultSet.getString(1));
            customer.setPhone(resultSet.getString(2));
            customer.setFName(resultSet.getString(3));
            customer.setLName(resultSet.getString(4));
            customer.setEmail(resultSet.getString(5));
            customer.setPassword(resultSet.getString(6));
            customer.setPromoted(resultSet.getInt(7));
            customer.setAddress(resultSet.getString(8));
            customer.setPromoteMN(resultSet.getString(9));
            return customer;
        }
        return null;
    }

    public static void main(String[] args) throws SQLException {
        CustomerRepo customerRepo = new CustomerRepo();
        System.out.println(customerRepo.Sign_in("ab", "12", "customer").getLName());
    }
}

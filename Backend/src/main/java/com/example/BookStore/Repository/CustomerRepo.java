package com.example.BookStore.Repository;

import com.example.BookStore.Models.Book;
import com.example.BookStore.Models.Customer;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CustomerRepo {
    DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    //userName, Phone, FName, LName, email, Password, promoted, Address, PromoteMN
    Customer get_data(String username) throws SQLException {
        String query = "SELECT * FROM manager WHERE (username = '" + username + "' OR email = '" + username + "')";
        Customer customer = new Customer();
        ResultSet resultSet = connection.getStatement().executeQuery(query);
        if (resultSet.next()) {
            customer.setUserName(resultSet.getString(1));
            customer.setFname(resultSet.getString(2));
            customer.setEmail(resultSet.getString(3));
            customer.setAddress(resultSet.getString(4));
            customer.setPhone(resultSet.getString(5));
            customer.setPassword(resultSet.getString(6));
            customer.setPromoted(resultSet.getInt(7));
            customer.setPromoteMN(resultSet.getString(8));
        }
        return customer;
    }

    List<Book> get_books(int amount) {
        ArrayList<Book> books = new ArrayList<>();
        String query = "SELECT * FROM book WHERE amount > 0 LIMIT " + amount;
        try {
            var resultSet = connection.getStatement().executeQuery(query);
            while (resultSet.next()) {
                Book book = new Book();
                book.setBook_ISBN(resultSet.getString(1));
                book.setTitle(resultSet.getString(2));
                book.setPublication_Year(resultSet.getString(3));
                book.setCategory(resultSet.getString(4));
                book.setPrice(resultSet.getInt(5));
                book.setAmount(resultSet.getInt(6));
                book.setPublisher(resultSet.getString(7));
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return books;
    }
}

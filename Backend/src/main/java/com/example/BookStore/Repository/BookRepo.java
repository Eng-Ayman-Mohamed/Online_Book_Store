package com.example.BookStore.Repository;

import com.example.BookStore.Models.Book;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookRepo {
    private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    //Book_ISBN, title, Publication_Year, Category, price, amount, Publisher
    boolean add_new_book(Book book) throws SQLException {
        String query = "SELECT * FROM Book WHERE Book_ISBN = '" + book.getBook_ISBN() + "'";
        if (connection.getStatement().executeQuery(query).next()) return false;
        query = "INSERT INTO Book VALUES ('" + book.getBook_ISBN() + "', '" + book.getTitle() + "', '" + book.getPublication_Year() + "', '" + book.getCategory() + "', " + book.getPrice() + ", " + book.getAmount() + ", '" + book.getPublisher() + "')";
        connection.getStatement().executeUpdate(query);
        return true;
    }

    boolean update_book_price(String ISBN, int value) throws SQLException {
        String query = "UPDATE Book SET price = " + value + "WHERE Book_ISBN = '" + ISBN + "'";
        connection.getStatement().executeUpdate(query);
        return true;
    }

    boolean delete_book(String ISBN) throws SQLException {
        String query = "DELETE FROM Book WHERE Book_ISBN = '" + ISBN + "'";
        connection.getStatement().executeUpdate(query);
        return true;
    }
//Book_ISBN, title, Publication_Year, Category, price, amount, Publisher
    List<Book> search(String field, String value) throws SQLException {
        List<Book> books = new ArrayList<>();
        String query = "SELECT * FROM Book WHERE " + field + " = '" + value + "'";
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
            books.add(book);
        }
        return books;
    }
}

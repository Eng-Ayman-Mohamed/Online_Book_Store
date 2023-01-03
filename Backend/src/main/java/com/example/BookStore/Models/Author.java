package com.example.BookStore.Models;

public class Author {
    String author_name;
    String Book_ISBN;

    public Author(String author_name, String book_ISBN) {
        this.author_name = author_name;
        Book_ISBN = book_ISBN;
    }

    public String getAuthor_name() {
        return author_name;
    }

    public void setAuthor_name(String author_name) {
        this.author_name = author_name;
    }

    public String getBook_ISBN() {
        return Book_ISBN;
    }

    public void setBook_ISBN(String book_ISBN) {
        Book_ISBN = book_ISBN;
    }
}

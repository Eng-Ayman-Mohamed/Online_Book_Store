package com.example.BookStore.Models;

public class Book {
    private String Book_ISBN;
    private String title;
    private String Publication_Year;
    private String Category;
    private int price;
    private int amount;
    private String Publisher;

    public Book(String book_ISBN, String title, String publication_Year, String category, int price, int amount, String publisher) {
        Book_ISBN = book_ISBN;
        this.title = title;
        Publication_Year = publication_Year;
        Category = category;
        this.price = price;
        this.amount = amount;
        Publisher = publisher;
    }

    public String getBook_ISBN() {
        return Book_ISBN;
    }

    public void setBook_ISBN(String book_ISBN) {
        Book_ISBN = book_ISBN;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublication_Year() {
        return Publication_Year;
    }

    public void setPublication_Year(String publication_Year) {
        Publication_Year = publication_Year;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getPublisher() {
        return Publisher;
    }

    public void setPublisher(String publisher) {
        Publisher = publisher;
    }
}

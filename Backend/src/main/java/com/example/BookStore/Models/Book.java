package com.example.BookStore.Models;

import jakarta.persistence.*;

import javax.xml.crypto.Data;
import java.util.List;

@Entity
@Table
public class Book {
    @Id
    String ISBN;
    String title;
    String category;
    List<String> authors;
    @OneToMany
    Publisher publisher;
    Data publication_year;
    double price;
    int amount;

    public Book(String ISBN, String title, String category, List<String> authors, Publisher publisher, Data publication_year, double price) {
        this.ISBN = ISBN;
        this.title = title;
        this.category = category;
        this.authors = authors;
        this.publisher = publisher;
        this.publication_year = publication_year;
        this.price = price;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public void setAuthors(List<String> authors) {
        this.authors = authors;
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }

    public Data getPublication_year() {
        return publication_year;
    }

    public void setPublication_year(Data publication_year) {
        this.publication_year = publication_year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}

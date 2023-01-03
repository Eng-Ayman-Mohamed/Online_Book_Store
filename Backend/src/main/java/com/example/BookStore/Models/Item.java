package com.example.BookStore.Models;


public class Item {
    private Cart cart;
    Book book;
    int amount;

    public Item(Book book, int amount) {
        this.book = book;
        this.amount = amount;
    }
}

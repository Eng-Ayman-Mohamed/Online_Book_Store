package com.example.BookStore.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Item {
    @OneToOne(cascade = CascadeType.ALL)
    private Cart cart;
    @OneToOne(cascade = CascadeType.ALL)
    Book book;
    int amount;

    public Item(Book book, int amount) {
        this.book = book;
        this.amount = amount;
    }
}

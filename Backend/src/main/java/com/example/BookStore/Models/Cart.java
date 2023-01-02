package com.example.BookStore.Models;

import clojure.lang.Compiler;
import jakarta.persistence.*;
import org.springframework.data.annotation.Reference;

import java.sql.Time;
import java.util.Date;

@Entity
@Table
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    Customer customer;
    Date date;
    int total_price;
    String credit_num;
    String credit_exp_date;

    public Cart(Customer customer) {
        this.customer = customer;
        this.date = new Date();
    }

    boolean pay(String credit_num, String credit_exp_date) {
        this.credit_num = credit_num;
        this.credit_exp_date = credit_exp_date;
        return true;
    }

    void addItem(Book book, int amount) {
        total_price += book.getPrice() * amount;
    }
}

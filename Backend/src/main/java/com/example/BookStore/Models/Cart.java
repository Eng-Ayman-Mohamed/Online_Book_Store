package com.example.BookStore.Models;



public class Cart {

    private int id;
    Customer customer;
    //Date date;
    int total_price;
    String credit_num;
    String credit_exp_date;

    public Cart(Customer customer) {
        this.customer = customer;
        //this.date = new Date();
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

package com.example.BookStore.Models;

public class Items {
    private String BookId;
    private int cart_id;
    private int amountRequired;
    private int Price;

    public Items(String bookId, int cart_id, int amountRequired, int price) {
        BookId = bookId;
        this.cart_id = cart_id;
        this.amountRequired = amountRequired;
        Price = price;
    }

    public String getBookId() {
        return BookId;
    }

    public void setBookId(String bookId) {
        BookId = bookId;
    }

    public int getCart_id() {
        return cart_id;
    }

    public void setCart_id(int cart_id) {
        this.cart_id = cart_id;
    }

    public int getAmountRequired() {
        return amountRequired;
    }

    public void setAmountRequired(int amountRequired) {
        this.amountRequired = amountRequired;
    }

    public int getPrice() {
        return Price;
    }

    public void setPrice(int price) {
        Price = price;
    }
}

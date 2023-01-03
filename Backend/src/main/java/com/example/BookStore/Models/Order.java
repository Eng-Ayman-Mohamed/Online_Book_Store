package com.example.BookStore.Models;

public class Order {
    private String Id;
    private String  Manage_Name;
    private String Quantity;
    private String TotalPrice;
    private String createdAt;
    private String  updatedAt;
    private String Publisher;
    private String BookId;
    private String confirmed;
public Order(){

}
    public Order(String id, String manage_Name, String quantity, String totalPrice, String createdAt, String updatedAt, String publisher, String bookId, String confirmed) {
        Id = id;
        Manage_Name = manage_Name;
        Quantity = quantity;
        TotalPrice = totalPrice;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        Publisher = publisher;
        BookId = bookId;
        this.confirmed = confirmed;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getManage_Name() {
        return Manage_Name;
    }

    public void setManage_Name(String manage_Name) {
        Manage_Name = manage_Name;
    }

    public String getQuantity() {
        return Quantity;
    }

    public void setQuantity(String quantity) {
        Quantity = quantity;
    }

    public String getTotalPrice() {
        return TotalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        TotalPrice = totalPrice;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getPublisher() {
        return Publisher;
    }

    public void setPublisher(String publisher) {
        Publisher = publisher;
    }

    public String getBookId() {
        return BookId;
    }

    public void setBookId(String bookId) {
        BookId = bookId;
    }

    public String getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(String confirmed) {
        this.confirmed = confirmed;
    }
}

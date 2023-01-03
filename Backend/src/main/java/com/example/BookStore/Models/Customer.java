package com.example.BookStore.Models;




public class Customer {

    private String username;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String password;

    public Customer(String username, String name, String email, String address, String phone, String password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.password = password;
    }
    public Customer() {
    }
}

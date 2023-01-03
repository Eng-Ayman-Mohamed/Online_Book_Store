package com.example.BookStore.Models;

public class Customer {

    private String userName;
    private String Phone;
    private String FName;
    private String LName;
    private String email;
    private String Password;
    private int promoted;
    private String PromoteMN;
    private String Address;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getFName() {
        return FName;
    }

    public void setFName(String FName) {
        this.FName = FName;
    }

    public String getLName() {
        return LName;
    }

    public void setLName(String LName) {
        this.LName = LName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public int isPromoted() {
        return promoted;
    }

    public void setPromoted(int promoted) {
        this.promoted = promoted;
    }

    public String getPromoteMN() {
        return PromoteMN;
    }

    public void setPromoteMN(String promoteMN) {
        PromoteMN = promoteMN;
    }

    public int getPromoted() {
        return promoted;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }
}

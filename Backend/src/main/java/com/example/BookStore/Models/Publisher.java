package com.example.BookStore.Models;

public class Publisher {
    private String Name;
    private String Address;
    private String PhoneNum;

    public Publisher(String name, String address, String phoneNum) {
        Name = name;
        Address = address;
        PhoneNum = phoneNum;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getPhoneNum() {
        return PhoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        PhoneNum = phoneNum;
    }
}

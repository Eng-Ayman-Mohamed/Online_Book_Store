package com.example.BookStore.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Manager {
    @Id
    private String username;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String password;

}

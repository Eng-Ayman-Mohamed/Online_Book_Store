package com.example.BookStore.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Publisher {
    @Id
    private String name;
    private String phone;
    private String address;
}

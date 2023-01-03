package com.example.BookStore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@SpringBootApplication
public class BookStoreApplication {

	public static void main(String[] args) {
		System.out.println("Hello World");
		SpringApplication.run(BookStoreApplication.class, args);
	}

}

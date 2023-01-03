package com.example.BookStore;

import com.example.BookStore.Models.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/manager")
public class ManagerController {

    //* 1. Add new books
    @PostMapping("/addBook")
    public boolean addBook(@RequestBody Book book) {
        return true;
    }
    //* 2. Modify existing books
    @PutMapping("/modifyBook")
    public boolean modifyBook(@RequestBody Book book) {
        return true;
    }
    //* 7. View all books
    @GetMapping("/viewBooks")
    public ArrayList<Book> getBooks() {
        return new ArrayList<Book>();
    }
    //* 3. Place orders for books
    @PostMapping("/placeOrder")
    public boolean placeOrder(@RequestBody Cart cart) {
        return true;
    }
    //* 4. Confirm orders
    @PutMapping("/confirmOrder")
    public boolean confirmOrder(@RequestBody Cart cart) {
        return true;
    }
    //* 5. Cancel orders
    @PutMapping("/cancelOrder")
    public boolean cancelOrder(@RequestBody Cart cart) {
        return true;
    }
    //* 6. View all orders
    @GetMapping("/viewOrders")
    public ArrayList<Cart> getOrders() {
        return new ArrayList<>();
    }

    //* 8. View all customers
    @GetMapping("/viewCustomers")
    public ArrayList<Customer> getCustomers() {
        return new ArrayList<>();
    }

    //* 5. Promote registered customers to have managers credentials
    @PutMapping("/promoteCustomer")
    public boolean promoteCustomer(@RequestBody Customer customer) {
        return true;
    }
    //* 6. View the following reports on sales
    //*  The total sales for books in the previous month
    @GetMapping("/totalSales")
    public ArrayList<Cart> totalSales() {
        return new ArrayList<>();
    }
    //* b. The top 5 customers who purchase the most purchase amount in descending order for the last three months
    @GetMapping("/top5Customers")
    public ArrayList<Customer> top5Customers() {
        return new ArrayList<>();
    }
    //* c. The top 10 selling books for the last three month
    @GetMapping("/top10Books")
    public ArrayList<Book> top10Books() {
        return new ArrayList<>();
    }


}

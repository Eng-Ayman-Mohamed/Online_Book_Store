package com.example.BookStore;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/manager")
public class ManagerController {

    //* 1. Add new books
    @PostMapping("/addBook")
    public String addBook(@RequestBody String book) {
        return "Hello Manager";
    }
    //* 2. Modify existing books
    @PutMapping("/modifyBook")
    public String modifyBook(@RequestBody String book) {
        return "Hello Manager";
    }
    //* 7. View all books
    @GetMapping("/viewBooks")
    public ArrayList<String> getBooks() {
        return new ArrayList<String>();
    }
    //* 3. Place orders for books
    @PostMapping("/placeOrder")
    public String placeOrder(@RequestBody String order) {
        return "Hello Manager";
    }
    //* 4. Confirm orders
    @PutMapping("/confirmOrder")
    public String confirmOrder(@RequestBody String order) {
        return "Hello Manager";
    }
    //* 5. Cancel orders
    @PutMapping("/cancelOrder")
    public String cancelOrder(@RequestBody String order) {
        return "Hello Manager";
    }
    //* 6. View all orders
    @GetMapping("/viewOrders")
    public ArrayList<String> getOrders() {
        return new ArrayList<String>();
    }

    //* 8. View all customers
    @GetMapping("/viewCustomers")
    public ArrayList<String> getCustomers() {
        return new ArrayList<String>();
    }

    //* 5. Promote registered customers to have managers credentials
    @PutMapping("/promoteCustomer")
    public String promoteCustomer(@RequestBody String customer) {
        return "Hello Manager";
    }
    //* 6. View the following reports on sales
    //*  The total sales for books in the previous month
    @GetMapping("/totalSales")
    public String totalSales() {
        return "Hello Manager";
    }
    //* b. The top 5 customers who purchase the most purchase amount in descending order for the last three months
    @GetMapping("/top5Customers")
    public String top5Customers() {
        return "Hello Manager";
    }
    //* c. The top 10 selling books for the last three month
    @GetMapping("/top10Books")
    public String top10Books() {
        return "Hello Manager";
    }


}

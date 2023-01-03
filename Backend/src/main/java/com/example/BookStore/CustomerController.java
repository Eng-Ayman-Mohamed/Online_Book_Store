package com.example.BookStore;

import com.example.BookStore.Models.Book;
import com.example.BookStore.Models.Customer;
import com.example.BookStore.Models.shopping_cart;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    // get customer by id
    @GetMapping("/get/{id}")
    public Customer getCustomer(@PathVariable int id) {
        return new Customer();
    }


    //1. Edit his personal information including his password
    @PutMapping("/editCustomer")
    public boolean editCustomer(@RequestBody Customer customer) {
        return true;
    }

    //2. Search for books by any of the book’s attributes. (Use indices to speed up searches when possible)
    // search by title
    @GetMapping("/searchByTitle/{title}")
    public ArrayList<Book> searchByTitle(@PathVariable String title) {
        return new ArrayList<>();
    }

    // search by author
    @GetMapping("/searchByAuthor/{author}")
    public ArrayList<Book> searchByAuthor(@PathVariable String author) {
        return new ArrayList<>();
    }

    // search by category
    @GetMapping("/searchByCategory/{category}")
    public ArrayList<Book> searchByCategory(@PathVariable String category) {
        return new ArrayList<>();
    }

    // search by price
    @GetMapping("/searchByPrice/{price}")
    public ArrayList<Book> searchByPrice(@PathVariable int price) {
        return new ArrayList<>();
    }

    // search by publisher
    @GetMapping("/searchByPublisher/{publisher}")
    public ArrayList<Book> searchByPublisher(@PathVariable String publisher) {
        return new ArrayList<>();
    }

    @GetMapping("/search")
    public ArrayList<Book> searchBook(@RequestBody Book book) {
        return new ArrayList<Book>();
    }

    @GetMapping("/getBooks")
    public ArrayList<Book> getBooks() {
        return new ArrayList<Book>();
    }
    //3. View the details of a book

    /**
     * this if card stored in db
     * 3. View the details of a card information
     *
     * @param
     * @return
     */
    //3. Add books to a shopping cart
    @PostMapping("/addToCart")
    public boolean addToCart(@RequestBody Book book) {
        return true;
    }

    //4. Remove books from a shopping cart
    @PutMapping("/removeFromCart")
    public boolean removeFromCart(@RequestBody Book book) {
        return true;
    }

    //4. Manage his shopping cart. This includes the following.
    //* • View the items in the cart
    @GetMapping("/viewCart ")
    public ArrayList<Book> viewCart() {
        return new ArrayList<Book>();
    }

    //* • View the individual and total prices of the books in the cart
    @GetMapping("/viewCartPrice")
    public double viewCartPrice() {
        return 0;
    }

    //5. Checkout a shopping cart
    //* • The customer is then required to provide a credit card number and its expiry date.
    //* This transaction is completed successfully if the credit card information is appropriate.
    @PostMapping("/checkout")
    public boolean checkout(@RequestBody shopping_cart cart) {
        return true;
    }

    //* • The book’s quantities in the store are updated according to this transaction.
    @PutMapping("/updateQuantity")
    public boolean updateQuantity(@RequestBody Book book) {
        return true;
    }

    //6. Logout of the system
    @GetMapping("/logout/{id}")
    public boolean logout(@PathVariable int id) {

        return true;
    }

}

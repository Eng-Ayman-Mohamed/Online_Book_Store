package com.example.BookStore;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/customer")
public class CustomerController {

// get customer by id
    @GetMapping("/get/{id}")
    public String getCustomer( @PathVariable("id") int id) {
        return "Hello Customer";
    }


    //1. Edit his personal information including his password
    @PutMapping("/editCustomer")
    public String editCustomer(@RequestBody String customer) {
        return "Hello Customer";
    }
    //2. Search for books by any of the book’s attributes. (Use indices to speed up searches when possible)
    @GetMapping("/search")
    public ArrayList<String> searchBook(@RequestBody String book) {
        return new ArrayList<String>();
    }

    @GetMapping("/getBooks")
    public ArrayList<String> getBooks() {
        return new ArrayList<>();
    }
    /**
     * this if card stored in db
     * 3. View the details of a card information
     * @param 
     * @return
     */
    //3. Add books to a shopping cart
    @PostMapping("/addToCart")
    public String addBookToShopping(@RequestBody String book) {
        return "Hello Customer";
    }
    //4. Manage his shopping cart. This includes the following.
    //* • View the items in the cart
    @GetMapping("/viewCart ")
    public String viewCart( @PathVariable String cart) {
        return "Hello Customer";
    }
    //* • View the individual and total prices of the books in the cart
    @GetMapping("/viewCartPrice")
    public ArrayList<String> viewCartPrice() {
        return new ArrayList<String>();
    }
    //* • Remove items from the cart
    @DeleteMapping("/removeFromCart")
    public String removeBookFromCart(@RequestBody String book) {
        return "Hello Customer";
    }
    //5. Checkout a shopping cart
    //* • The customer is then required to provide a credit card number and its expiry date.
    //* This transaction is completed successfully if the credit card information is appropriate.
    @PostMapping("/checkout")
    public String checkout(@RequestBody String creditCard) {
        return "Hello Customer";
    }
    //* • The book’s quantities in the store are updated according to this transaction.
    @PutMapping("/updateQuantity")
    public String updateQuantity(@RequestBody String book) {
        return "Hello Customer";
    }
    //6. Logout of the system
    @GetMapping("/logout")
    public String logout() {
        return "Hello Customer";
    }

}

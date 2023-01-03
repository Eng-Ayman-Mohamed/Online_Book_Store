package com.example.BookStore;

import com.example.BookStore.Models.Customer;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign")
public class SignController {

      Customer customer = new Customer();
        @RequestMapping("/in")
        public Customer signIn(@PathVariable String username, String password, String type) {

            return customer;
        }

        @RequestMapping("/up")
        public Customer signUp(@RequestBody Customer User) {
            customer = User;

            return customer;
        }

}

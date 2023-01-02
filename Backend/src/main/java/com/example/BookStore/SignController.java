package com.example.BookStore;

import com.example.BookStore.objects.Customer;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign")
public class SignController {

        @RequestMapping("/in")
        public Customer signIn(@PathVariable String username, String password, String type) {

            return new Customer();
        }

        @RequestMapping("/up")
        public Customer signUp(@RequestBody Customer User) {
            return new Customer();
        }

}

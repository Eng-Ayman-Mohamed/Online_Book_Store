package com.example.BookStore;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign")
public class SignController {

        @RequestMapping("/in")
        public String signIn(@PathVariable String username, String password) {
            return "Hello Sign In";
        }

        @RequestMapping("/up")
        public String signUp(@RequestBody String User) {
            return "Hello Sign Up";
        }

}

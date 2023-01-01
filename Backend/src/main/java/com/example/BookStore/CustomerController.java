package com.example.BookStore;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/customer")
public class CustomerController {

        @GetMapping("/get")
        public String getCustomer() {
            return "Hello Customer";
        }

}

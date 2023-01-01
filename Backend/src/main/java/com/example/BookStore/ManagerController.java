package com.example.BookStore;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manager")

public class ManagerController {

       @GetMapping("/get")
        public String getManager() {
            return "Hello Manager";
        }

}

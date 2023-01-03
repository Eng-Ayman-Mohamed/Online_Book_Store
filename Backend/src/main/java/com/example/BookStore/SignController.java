package com.example.BookStore;

import com.example.BookStore.Models.Customer;
import com.example.BookStore.Repository.DBConnection;
import com.example.BookStore.Repository.SignRepo;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/sign")
@CrossOrigin(origins = "http://localhost:3000")
public class SignController {

      Customer customer = new Customer();
      DBConnection dbConnection = new DBConnection();

    SignRepo signRepo = new SignRepo();

    @RequestMapping("/in")
        public Response signIn(@RequestBody SignIn sinned) {
        System.out.println(   dbConnection.connect());
        signRepo.setConnection(dbConnection);
        Response response = new Response();
        boolean res= signRepo.checkCustomer(sinned.getUsername(), sinned.getPassword());
          response.setState(res? "accepted":"rejected");
            response.setUsername(sinned.getUsername());
            response.setType("customer");
            return response;
        }

        @RequestMapping("/up")
        public Response signUp(@RequestBody Customer User) {

            System.out.println(   dbConnection.connect());
            signRepo.setConnection(dbConnection);
            boolean res= signRepo.addCustomer(User);
            Response response = new Response();
            response.setState( res? "accepted":"rejected");
            return response;
        }
    @RequestMapping("/inManager")
    public Response signInM(@RequestBody SignIn sinned) {
        Response response = new Response();
        response.setState("accepted");
        response.setId(1);
        response.setUsername("abdu");
        return response;
    }

    @RequestMapping("/upManager")
    public Response signUpM(@RequestBody Customer User) {
        Response response = new Response();
        response.setState("accepted");

        return response;
    }

}
class SignIn{
    String username;
    String password;
    String type;
    public SignIn(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
class Response {
    //accepted && rejected
    String state;
    int id;
    String username;
    String type;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

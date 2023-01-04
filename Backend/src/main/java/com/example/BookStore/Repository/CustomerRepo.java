package com.example.BookStore.Repository;

import com.example.BookStore.Models.Customer;

public class CustomerRepo {
    DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }
    //userName, Phone, FName, LName, email, Password, promoted, Address, PromoteMN

    public Customer getCustomer(String username) {
        String query = "SELECT * FROM customer WHERE username = '" + username + "'";
        try {
            var result = connection.getStatement().executeQuery(query);
            if (result.next()) {
                Customer customer = new Customer();
                customer.setUserName(result.getString("username"));
                customer.setFname(result.getString("fname"));
                customer.setLname(result.getString("lname"));
                customer.setPhone(result.getString("phone"));
                customer.setEmail(result.getString("email"));
                customer.setPassword(result.getString("password"));
                customer.setAddress(result.getString("address"));
                return customer;
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return null;
    }
    public boolean editCustomer(Customer customer) {
        String query = "UPDATE customer SET fname = '" + customer.getFname()
                + "', lname = '" + customer.getLname() + "', phone = '" + customer.getPhone()
                + "', email = '" + customer.getEmail() + "', password = '" + customer.getPassword()
                + "', address = '" + customer.getAddress() + "' WHERE username = '" +
                customer.getUserName() + "'";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }

    //remove not confirmed shopping cart when user log out
    public boolean customer_log_out(String username) {
        String query = "DELETE FROM shopping_cart WHERE username = '" + username + "' AND state = false";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }

}

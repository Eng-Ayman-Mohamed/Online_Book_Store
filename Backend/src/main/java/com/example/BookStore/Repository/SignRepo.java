package com.example.BookStore.Repository;

import java.sql.SQLException;
import com.example.BookStore.Models.Customer;

public class SignRepo {
private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }
    public boolean addManager(String username, String name, String email, String address, String phone, String password) throws SQLException {
        String query = "SELECT * FROM manager WHERE username = '" + username + "' OR email = '" + email + "'";
        if (connection.getStatement().executeQuery(query).next())
            return false;
        query = "INSERT INTO manager VALUES ('" + username + "', '" + name + "', '" + email + "', '" + address + "', '" + phone + "', '" + password + "')";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
    //customer > userName, Phone, FName, LName, email, Password, promoted, Address, PromoteMN
    public boolean addCustomer(Customer customer) {
        String query = "SELECT * FROM customer WHERE username = '" + username + "' OR email = '" + email + "'";
        if (connection.getStatement().executeQuery(query).next())
            return false;
        String query = "INSERT INTO customer VALUES ('" + customer.getUserName() + "', '" + customer.getPhone() +
                "', '" + customer.getFname() + "', '" + customer.getLname() + "', '" + customer.getEmail() + "', '" +
                customer.getPassword() + "', 0, '" + customer.getAddress() + "', null)";
        System.out.println(query);
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }

    public boolean checkManager(String username, String password) {
        String query = "SELECT * FROM manager WHERE (username = '" + username + "' OR email = '" + username + "') AND password = '" + password + "'";
        try {
            if (connection.getStatement().executeQuery(query).next()) {
                return true;
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
      public boolean checkCustomer(String username, String password) {
        String query = "SELECT * FROM customer WHERE (username = '" + username + "' OR email = '" + username + "') AND password = '" + password + "'";
        try {
            if (connection.getStatement().executeQuery(query).next()) {
                return true;
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
}

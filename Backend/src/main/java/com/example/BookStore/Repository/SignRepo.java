package com.example.BookStore.Repository;

import java.sql.SQLException;

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
    public boolean addCustomer(String username, String name, String email, String address, String phone, String password) throws SQLException {
        String query = "SELECT * FROM customer WHERE username = '" + username + "' OR email = '" + email + "'";
        if (connection.getStatement().executeQuery(query).next())
            return false;
        query = "INSERT INTO customer VALUES ('" + username + "', '" + name + "', '" + email + "', '" + address + "', '" + phone + "', '" + password + "', 0, null)";
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

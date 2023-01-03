package com.example.BookStore.Repository;

import com.example.BookStore.Models.Order;

import java.util.ArrayList;

public class OrderRepo {
    private DBConnection connection;

    public void setConnection(DBConnection connection) {
        this.connection = connection;
    }

    public boolean addOrder(String username, String ISBN, int quantity, String date) {
        String query = "INSERT INTO orders VALUES ('" + username + "', '" + ISBN + "', " + quantity + ", '" + date + "')";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
    public boolean deleteOrder(String username, String ISBN, int quantity, String date) {
        String query = "DELETE FROM orders WHERE username = '" + username + "' AND ISBN = '" + ISBN + "' AND quantity = " + quantity + " AND date = '" + date + "'";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
    public boolean updateOrder(String username, String ISBN, int quantity, String date) {
        String query = "UPDATE orders SET quantity = " + quantity + " WHERE Manage_Name = '" + username + "' AND ISBN = '" + ISBN + "' AND date = '" + date + "'";
        try {
            connection.getStatement().executeUpdate(query);
            return true;
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return false;
    }
    public ArrayList<Order> getOrders(String username) {
        ArrayList<Order> orders = new ArrayList<>();
        //Id, Manage_Name, Quantity, TotalPrice, createdAt, updatedAt, Publisher, BookId, confirmed
        String query = "SELECT * FROM orders WHERE Manage_Name = '" + username + "'";
        try {
            var resultSet = connection.getStatement().executeQuery(query);
            while (resultSet.next()) {
                Order order = new Order();
                order.setManage_Name(resultSet.getString("Manage_Name"));
                order.setBookId(resultSet.getString("Id"));
                order.setQuantity(String.valueOf(resultSet.getInt("Quantity")));
                order.setTotalPrice(String.valueOf(resultSet.getInt("TotalPrice")));
                order.setCreatedAt(resultSet.getString("createdAt"));
                order.setUpdatedAt(resultSet.getString("updatedAt"));
                order.setPublisher(resultSet.getString("Publisher"));
                order.setConfirmed(String.valueOf(resultSet.getBoolean("confirmed")));

                orders.add(order);
            }
        } catch (Exception ex) {
            System.out.println("ERROR: " + ex);
        }
        return orders;
    }
}

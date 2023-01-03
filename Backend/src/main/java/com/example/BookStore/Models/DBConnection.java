package com.example.BookStore.Models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DBConnection {
    public static void main(String[] args) {
        String url ="jdbc:mysql://localhost:3306/online_book_store";
        String username="root";
        String password="Mahmed123$$";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url,username,password);
            Statement statement =connection.createStatement();
            ResultSet result =statement.executeQuery("select * from book");
            while(result.next()){
                System.out.println(result.getInt(1)+"  "+result.getString(2));
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}

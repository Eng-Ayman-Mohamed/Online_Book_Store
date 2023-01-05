package com.example.BookStore;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Random;

public class DBConnectionTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/online_book_store";
        String username = "root";
        String password = "abdu";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            statement.executeUpdate("INSERT into online_book_store.publisher values('Ahmed','hi montazah','010928567')");
            String[] PublisherName = {"Penguin Random House", "Hachette Book Group (Big 5)"
                    , "HarperCollins"
                    , "Macmillan Publisher"
                    , "Simon & Schuster", "(Big 5)"
                    , "Scholastic Corporation."
                    , "Pearson Education."
                    , "McGraw-Hill Education"};
            String[] address = {"Shinkawaya Center",
                    "Kawasaki-shi Kanagawa-ke", "Greenham Business Park", "FALCON PRESS SDN BHD",
                    "1a Pope Street", "Kaplanstrasse 9 6063 Rum", "Hueber Verlag GmbH", "Between Towns Road"};
            statement.executeUpdate("INSERT into online_book_store.publisher values(" + "\'" + PublisherName[0] + "\'" + "," + "\'" + address[0] + "\'" + "," + "\'" + "0109225" + 0 + 0 + 0 + 0 + "\'" + ")");
            for (int i = 1; i < 1000; i++) {
                String x = String.valueOf((i % 10));
                if (i < 9) {
                    statement.executeUpdate("INSERT into online_book_store.publisher values(" + "\'" + PublisherName[i % 9] + "\'" + "," + "\'" + address[i % 8] + "\'" + "," + "\'" + "0109225" + x + x + x + x + "\'" + ")");
                } else {
                    statement.executeUpdate("INSERT into online_book_store.publisher values(" + "\'" + PublisherName[i % 9] + i + "\'" + "," + "\'" + address[i % 8] + i + "\'" + "," + "\'" + "0109225" + x + x + x + x + "\'" + ")");
                }
            }
            String[] bookTitle = {"apple", "sarah water", "stephen king", "amerecana", "Butter In a Lordly", "Bonjour Tristesse", "Carrion Comfort", "Clouds of Witness", "Cover Her Face"};
            String[] Publication_Year = {"2015", "2022", "1920", "2013", "2018", "1980", "1450", "1718", "2023"};
            String[] category = {"Science", "Art", "Religion", "History", "Geography"};
            for (int i = 1; i < 1000; i++) {
                Random rnd = new Random();
                int number = rnd.nextInt(999999);
                // this will convert any number sequence into 6 character.
                String ISBN = String.format("%06d", number);
                if (i > 100) {
                    ISBN = ISBN + i;
                }
                System.out.println(ISBN);
                statement.executeUpdate("INSERT into online_book_store.book values(" + "\'" + ISBN + "\'" + "," + "\'" + bookTitle[i % 9] + "\'" + "," + "\'" + Publication_Year[i % 9] + "\'" + "," + "\'" + category[i % 5] + "\'" + "," + number + "," + 70 + "," + "\'" + PublisherName[i % 9] + "\'" + ")");
            }
            String[] ISBN = {"926680148243", "741777148244", "891395148245", "481427148246", "171520148247", "460720148248", "722934148249"
                    , "489209148412"
                    , "636297148413"
                    , "902308148414"
                    , "745654148415",
                    "068045148416"};
            String[] Authors = {"Bertus Aafjes", "Netherlands",
                    "Patricia Aakhus",
                    "Hans Aanrud",
                    "Verna Aardem",
                    "David Aaron",
                    "Jane Aaron",
                    "Jonathan Aaron",
                    "Rachel Aaron"};
            for (int i = 0; i < 5000; i++) {
                if (i < 12) {
                    statement.executeUpdate("INSERT into online_book_store.author values(" + "\'" + Authors[i % 8] + "\'" + "," + "\'" + ISBN[i % 12] + "\'" + ")");
                } else {
                    statement.executeUpdate("INSERT into online_book_store.author values(" + "\'" + Authors[i % 8] + i + "\'" + "," + "\'" + ISBN[i % 12] + "\'" + ")");
                }

            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
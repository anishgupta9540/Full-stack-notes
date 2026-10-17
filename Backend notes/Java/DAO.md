In Java, DAO stands for Data Access Object. It is a design pattern used to isolate the application's business logic from the persistence layer (the database). Instead of scattering database connections and SQL queries throughout your application, the DAO pattern consolidates all database operations—like Create, Read, Update, and Delete (CRUD)—into dedicated classes

Key Components of the DAO Pattern

The DAO pattern typically relies on four core elements to maintain clean boundaries:
1 -> Model / Value Object (POJO): A simple Java class (often with just private fields, getters, and setters) that represents the database table structure.
2 -> DAO Interface: A standard Java interface defining the abstract CRUD methods (e.g., save(), delete(), findById()). It specifies what data operations are required without showing how they are executed.
3 -> DAO Concrete Implementation: The class that implements the DAO interface and contains the actual database technology logic (e.g., plain JDBC, Hibernate, or JPA).
4 -> Database/DataSource: The actual persistence mechanism holding your data.

Why Use the DAO Pattern?

1 -> Separation of Concerns: Your business logic doesn't care whether you're using MySQL, PostgreSQL, Oracle, or reading from a flat file. It only interacts with the interface.
2 -> Easier Testing: Because your database calls are hidden behind an interface, you can easily substitute a fake or "mocked" DAO layer when writing unit tests.
3 -> Loose Coupling: If you ever need to change your persistence framework (for example, switching from low-level JDBC to a tool like Hibernate), you only change the code inside your concrete DAO implementation classes. The rest of your app remains untouched.

DAO is the middleman between your Java application and the database.

Note: In modern framework ecosystems like Spring Boot, the DAO pattern is frequently automated or replaced by the Repository Pattern (such as Spring Data JPA), which generates these database method implementations for you under the hood.

splunk 
DAO
hibernate 
jdbc 
POJO

1. POJO — Data rakhta hai
Student ka naam, age aur marks.

2. DAO — Database ka kaam organize karta hai
Student ko save karna, search karna ya delete karna.

3. Hibernate — Database operations aasaan karta hai
Java object ko database table se map karta hai aur SQL generate kar sakta hai.
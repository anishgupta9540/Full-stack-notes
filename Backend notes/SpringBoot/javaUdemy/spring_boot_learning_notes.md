# Spring Boot Learning Notes

## 1. Spring Boot: Overview and History

- **Spring Boot initial release:** 2014
- **Spring Boot version:** The original notes mention 4.1.1 as the latest version. Verify the current release on the official Spring website before relying on this version number.
- **Spring Framework 7.0:** Spring Boot 4.x is based on the Spring Framework 7 generation.
- **Java baseline:** The original notes state a minimum of Java 17 and support through Java 26. Check the official compatibility documentation for the specific Spring Boot release you use.

### Relationship between Spring Framework, Spring MVC, and Spring Boot

A simplified timeline:

- **Spring Framework:** The foundational framework for Java applications.
- **Spring MVC (2004):** The web framework in the Spring ecosystem for building web applications and APIs.
- **Spring Boot (2014):** Builds on Spring to simplify application setup, configuration, and deployment.

---

## 2. Phase 1: Prerequisites and Foundations

### Java Mastery (Java 17 or 21)

Understand these topics well:

- Object-Oriented Programming (OOP)
- Collections Framework
- Generics
- Exception handling
- Lambda expressions
- Streams API
- Multithreading

### Build Tools

Learn **Maven** or **Gradle** to manage external dependencies and understand the build lifecycle.

### Spring Framework Core

Understand the concepts behind Spring Boot:

- Dependency Injection (DI)
- Inversion of Control (IoC)
- Bean lifecycle
- Basic Spring configuration

---

## 3. Phase 2: Spring Boot Basics and REST APIs

### Project Setup

- Create your first project using **Spring Initializr**.

### Spring MVC

Build RESTful APIs using annotations such as:

- `@RestController`
- `@RequestMapping`
- `@PathVariable`
- `@RequestParam`

### Data Transfer and Validation

- Use the **Data Transfer Object (DTO)** pattern.
- Validate user input with Bean Validation annotations such as `@Valid` and `@NotNull`.

### Global Exception Handling

Centralize API exception handling with:

- `@ControllerAdvice`
- `@ExceptionHandler`

---

## 4. Phase 3: Data Persistence and Databases

### Relational Databases

Choose an SQL database such as **PostgreSQL** or **MySQL**.

### Spring Data JPA and Hibernate

Learn Object-Relational Mapping (ORM) and how Java objects map to relational database tables.

### Entity Relationships

Practice mapping relationships using:

- `@OneToMany`
- `@ManyToOne`
- `@ManyToMany`

### Database Migrations

Use tools such as **Flyway** or **Liquibase** to manage database schema changes safely across environments.

---

## 5. Phase 4: Security, Testing, and Monitoring

### Spring Security

- Implement authentication and authorization.
- Learn stateless security architectures.
- Explore JSON Web Tokens (JWT) and OAuth 2.0.

### Testing

Write tests using:

- **JUnit 5** and **Mockito** for unit and isolated tests.
- `@SpringBootTest` for Spring Boot integration tests.
- **MockMvc** for testing MVC request handling without starting a real HTTP server.

### Actuator and Monitoring

Use **Spring Boot Actuator** to expose application health, metrics, and diagnostic information.

---

## 6. Phase 5: Distributed Systems and Microservices

### Spring Cloud Ecosystem

Learn about:

- **Eureka** for service discovery
- **Spring Cloud Gateway** for routing
- Centralized and distributed configuration management

### Asynchronous Messaging

Explore message brokers such as:

- **Apache Kafka**
- **RabbitMQ**

These can help services communicate asynchronously and reduce tight coupling.

### Containerization and DevOps

- Package applications with **Docker**.
- Learn deployment and orchestration with **Kubernetes**.
- Understand CI/CD pipelines.

---

## 7. Database Technology Timeline: JDBC, Hibernate, JPA, and Spring Data JPA

JPA came before Spring Data JPA, but JDBC and Hibernate came before JPA.

1. **JDBC (1997):** A Java API for connecting to databases and executing SQL.
2. **Hibernate (2001):** An Object-Relational Mapping (ORM) framework that maps Java objects to database tables.
3. **JPA (2006):** A Java specification that defines a standard approach to ORM.
4. **Spring Data JPA (2011):** Simplifies working with JPA through repository abstractions.

### Remember the Difference

| Technology | What it is | Main purpose |
|---|---|---|
| JDBC | Database connectivity API | Connect to a database and execute SQL |
| Hibernate | ORM framework and common JPA implementation | Map Java objects to relational tables |
| JPA | ORM specification | Define standard ORM APIs and behavior |
| Spring Data JPA | Data-access abstraction built on JPA | Reduce repository and data-access boilerplate |

**Key takeaway:** JDBC provides low-level database access, JPA defines a standard ORM API, Hibernate is a common ORM implementation, and Spring Data JPA simplifies repository-based data access.

---

## 8. Suggested Learning Order

1. Java fundamentals
2. Maven or Gradle
3. Spring Core: IoC, DI, and beans
4. Spring Boot project setup and configuration
5. Spring MVC and REST APIs
6. DTOs, validation, and exception handling
7. SQL and relational database fundamentals
8. JPA, Hibernate, Spring Data JPA, and migrations
9. Spring Security
10. Unit, integration, and MVC testing
11. Actuator and monitoring
12. Messaging and Spring Cloud
13. Docker, Kubernetes, and CI/CD

> **Note:** Release dates and version compatibility can change or vary by specific release. Verify version-sensitive details against the official Spring documentation before relying on them.

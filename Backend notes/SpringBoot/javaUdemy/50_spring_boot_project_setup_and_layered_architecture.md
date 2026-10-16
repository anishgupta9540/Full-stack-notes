# Spring Boot Project Setup and Layered Architecture

> Notes based on the Concept Encoding lesson. The examples below
> illustrate the concepts discussed; exact project versions and code may
> vary by setup.

## 1. Setting Up a Spring Boot Project

The easiest way to create a Spring Boot starter project is through
**Spring Initializr**:

-   Website: <https://start.spring.io/>
-   Choose the project language, build tool, Spring Boot version,
    project metadata, Java version, and dependencies.
-   Generate and download the project, then open it in your preferred
    IDE.

### Recommended starter selections

  -----------------------------------------------------------------------
  Setting                             Example / guidance
  ----------------------------------- -----------------------------------
  Project                             Maven or Gradle

  Language                            Java

  Group                               A reverse-domain-style identifier,
                                      e.g. `com.conceptencoding`

  Artifact                            Project name,
                                      e.g. `learning-spring-boot`

  Name / Description                  Describe the application

  Packaging                           Usually `Jar` for a standalone
                                      Spring Boot service

  Java                                Choose a version supported by the
                                      selected Spring Boot release,
                                      e.g. Java 17 or 21

  Dependency                          `Spring Web` for a basic web API
  -----------------------------------------------------------------------

The combination of **group** and **artifact** helps identify the
project. The group is commonly based on an organization or domain, while
the artifact is the project/module name.

### JAR vs. WAR

-   **JAR (Java Archive):** Common for modern Spring Boot applications
    and microservices. It can package application classes, libraries,
    and resources and typically runs with an embedded server.
-   **WAR (Web Application Archive):** Commonly used when deploying a
    web application to an external servlet container, though deployment
    choices depend on the application and environment.

For a basic standalone Spring Boot REST service, **JAR is usually the
simplest choice**.

### Why add Spring Web?

The `Spring Web` dependency provides support for building web
applications and REST APIs. It includes Spring MVC and typically an
embedded Tomcat server.

Start with only the dependencies needed. Add more later as the project
requires them, such as database access or validation.

### Open and run the project

1.  Generate and download the project from Spring Initializr.
2.  Extract the downloaded archive.
3.  Open the project in an IDE such as IntelliJ IDEA.
4.  Locate the Maven `pom.xml` and the Spring Boot application class.
5.  Run the application.

IntelliJ IDEA Ultimate provides Spring project creation features in the
IDE. If that option is unavailable in your edition, create the project
through Spring Initializr and open it normally.

When the application starts, the embedded server (often Tomcat) starts
on a configured port, commonly **8080**. Without a controller or
endpoint, there may be no application API to call yet.

### Maven and `pom.xml`

Maven manages dependencies and the project build. Dependencies selected
in Spring Initializr are recorded in `pom.xml`. As the application
grows, additional dependencies can be added there.

------------------------------------------------------------------------

## 2. Layered Architecture in Spring Boot

A common application structure separates responsibilities into layers:

1.  **Controller layer** --- receives HTTP requests and returns HTTP
    responses.
2.  **Service layer** --- contains business logic and coordinates
    application operations.
3.  **Repository layer** --- handles persistence and communication with
    the database.

A typical request flow is:

``` text
Client
  |
  v
Controller
  |
  v
Service
  |
  v
Repository
  |
  v
Database
```

The response travels back through the layers:

``` text
Database -> Repository -> Service -> Controller -> Client
```

### Controller layer

-   Defines the API endpoints clients call.
-   Common annotations include `@RestController`, `@RequestMapping`,
    `@GetMapping`, and `@PostMapping`.
-   Reads request data, performs request-level handling, and delegates
    work to the service layer.
-   Should generally avoid containing business logic or directly
    accessing the database.

### Service layer

-   Contains business rules and application logic.
-   Coordinates calls to repositories and other services.
-   Converts persistence entities into response DTOs where appropriate.
-   Commonly uses the `@Service` annotation.

### Repository layer

-   Encapsulates database access, including fetching, inserting,
    updating, and deleting records.
-   Often uses Spring Data repository interfaces, such as interfaces
    extending `JpaRepository`, or custom persistence code.
-   Commonly uses `@Repository` for custom repository implementations;
    Spring Data repository interfaces are generally detected
    automatically.
-   Should be the layer responsible for persistence rather than having
    controllers or services perform database operations directly.

**Principle:** Keep each layer focused on its responsibility. Although
code can technically access the database from other layers, doing so
weakens separation of concerns and makes code harder to test and
maintain.

------------------------------------------------------------------------

## 3. Supporting Packages and Concepts

These are useful parts of the application structure, but they are not
all separate architectural layers.

### DTO --- Data Transfer Object

A DTO is an object used to transfer data between parts of an application
or across an API boundary. DTOs help keep the external API contract
separate from internal business objects and database entities.

Two common types are:

#### Request DTO

Represents the data accepted from a client.

-   The controller maps incoming request data into a request DTO.
-   The service layer can work with the DTO rather than depending
    directly on the external request schema.
-   If the external API field names change, mapping at the boundary can
    limit the impact on the rest of the application.

#### Response DTO

Represents the data returned to a client.

-   The service layer maps an entity or domain result into a response
    DTO.
-   The API can expose clear, stable field names without exposing
    database column names or internal entity details.
-   Sensitive or irrelevant database fields can be omitted from the
    response.

Example conceptual flow:

``` text
HTTP Request
    |
    v
Request DTO
    |
    v
Service <----> Repository <----> Database
    |
    v
Entity / domain result
    |
    v
Response DTO
    |
    v
HTTP Response
```

### Entity

An entity is a Java class that represents persisted data, commonly
mapped to a database table using JPA.

-   Often annotated with `@Entity`.
-   Fields map to persistent properties/columns, subject to JPA mapping
    rules.
-   Usually contains an identifier marked with `@Id`.
-   Repositories commonly read and write entities.

For example, an `Employee` entity might contain an ID and employee name.
A corresponding database table might store those values in columns.

Entities are not necessarily identical to database tables in every
detail; mappings can be customized with annotations such as `@Table`,
`@Column`, and relationship annotations.

### Utility / helper classes

Utility classes contain reusable helper methods shared by multiple parts
of the application.

-   Keep utility methods cohesive and broadly reusable.
-   Avoid putting business workflows into a generic utility class;
    business rules generally belong in services.

### Configuration

Application settings can be externalized instead of hard-coded in Java
code.

Common configuration files include:

-   `application.properties`
-   `application.yml`

For example, instead of hard-coding a timeout or other
environment-specific value in a class, define a property and inject it
through Spring configuration.

Benefits:

-   Values can differ between environments.
-   Some settings can be changed without changing application source
    code.
-   Configuration is easier to review and manage centrally.

Do not store secrets in source-controlled configuration files; use
environment variables or an appropriate secret-management solution.

------------------------------------------------------------------------

## 4. Example: Payment API Request Flow

Imagine an API that fetches payment details by ID.

### Step-by-step flow

1.  **Client:** Sends an HTTP request to an endpoint such as
    `GET /payments/{id}`.
2.  **Controller:** Reads the ID and maps the incoming data into an
    internal request DTO, if the application design calls for one.
3.  **Service:** Receives the request data and applies business logic.
4.  **Repository:** Fetches the matching payment record from the
    database.
5.  **Entity:** The retrieved row is represented by a payment entity or
    another persistence result.
6.  **Service:** Maps the entity into a payment response DTO.
7.  **Controller:** Returns the response to the client.

``` text
Client
  | GET /payments/{id}
  v
PaymentController
  | maps request
  v
PaymentService
  | asks for payment
  v
PaymentRepository
  | queries
  v
Database
  |
  v
Payment Entity
  |
  v
PaymentService
  | maps entity to response DTO
  v
PaymentController
  |
  v
Client receives PaymentResponse
```

### Why map an entity to a response DTO?

A database may use a column name such as `card_id`, while the API might
expose a field with a different name or structure. Mapping through a
response DTO lets the database schema and public API evolve more
independently.

Similarly, a request DTO can isolate the service layer from changes to
the external request format.

------------------------------------------------------------------------

## 5. Quick Reference: Common Annotations

  -----------------------------------------------------------------------
  Annotation                          Typical purpose
  ----------------------------------- -----------------------------------
  `@SpringBootApplication`            Marks the main Spring Boot
                                      application class and enables
                                      common configuration and component
                                      scanning

  `@RestController`                   Declares a controller whose handler
                                      return values are written to the
                                      response body by default

  `@GetMapping`                       Maps HTTP GET requests

  `@PostMapping`                      Maps HTTP POST requests

  `@Service`                          Marks a service component

  `@Repository`                       Marks a persistence component and
                                      supports persistence exception
                                      translation

  `@Entity`                           Marks a JPA entity

  `@Id`                               Marks the entity's identifier field

  `@Configuration`                    Declares a source of bean
                                      definitions

  `@Value` /                          Reads externalized configuration
  `@ConfigurationProperties`          into application code
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 6. Key Takeaways

-   Spring Initializr is a convenient way to create a Spring Boot
    project.
-   Maven and Gradle are build tools; choose the one you prefer and
    understand.
-   `Spring Web` is a common starting dependency for REST APIs.
-   A Spring Boot application commonly runs with an embedded server such
    as Tomcat.
-   Keep responsibilities separated: **Controller → Service →
    Repository**.
-   Use request DTOs and response DTOs to separate API contracts from
    internal models.
-   Entities represent persisted data; repositories manage persistence
    operations.
-   Put reusable helper methods in utility classes when appropriate.
-   Externalize environment-specific settings in
    `application.properties` or `application.yml`.
-   Add dependencies only when the project needs them.

## 7. Suggested Practice

1.  Generate a Maven Spring Boot project with the Spring Web dependency.
2.  Run the application and confirm that the server starts.
3.  Create a `PaymentController` with a simple GET endpoint.
4.  Add a `PaymentService` and call it from the controller.
5.  Add a repository abstraction and a payment entity or mock repository
    result.
6.  Create request and response DTOs.
7.  Map the entity/result to a response DTO in the service layer.
8.  Move configurable values into `application.properties`.
9.  Test the endpoint with a browser, curl, or an API client.

------------------------------------------------------------------------

*Related study plan mentioned in the lesson: deepen Core Java
(Collections, multithreading, Java 8 features, etc.) and important
Spring Boot topics.*

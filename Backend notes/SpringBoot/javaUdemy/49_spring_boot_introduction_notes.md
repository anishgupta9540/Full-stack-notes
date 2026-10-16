# Introduction to Spring Boot — Study Notes

> Based on the provided lesson transcript. These notes organize the lesson's main ideas for revision.

## 1. Why Spring Boot?

Spring Boot simplifies creating and running Spring-based applications. The lesson explains its purpose by tracing the evolution from **Servlets** to **Spring MVC** and then to **Spring Boot**.

The three main Spring Boot advantages highlighted are:

1. **Dependency management** — starter dependencies and compatible versions reduce manual work.
2. **Auto-configuration** — common configuration is supplied automatically.
3. **Embedded server** — run the application directly without manually packaging and deploying it to an external Tomcat server.

Spring Boot builds on the Spring Framework; it does not replace the underlying Spring MVC request-handling model.

---

## 2. Servlets and Servlet Containers

### What is a Servlet?
A **Servlet** is a Java class that handles a client request, processes it, and returns a response.

A servlet may implement HTTP methods such as:
- `doGet()`
- `doPost()`
- `doPut()`
- `doDelete()`

The lesson's example extends `HttpServlet` and implements request-handling logic in these methods.

### What is a Servlet Container?
A **servlet container** manages servlets and routes requests to the appropriate servlet. **Tomcat** is used in the lesson as the example.

### Traditional servlet request flow
1. A client sends an HTTP request.
2. The request reaches the servlet container (for example, Tomcat).
3. The container uses servlet mappings—traditionally configured in `web.xml`—to identify the target servlet.
4. The appropriate HTTP method, such as `doGet()` or `doPost()`, handles the request.
5. The servlet processes the request and returns a response.

### `web.xml` and servlet mapping
- `web.xml` can define servlet mappings and other web-application configuration, such as filters.
- A mapping connects a URL pattern to a servlet.
- As an application grows and gains many servlets and mappings, `web.xml` can become difficult to maintain.
- Traditional applications were commonly packaged as a **WAR** and deployed to an external servlet container.

---

## 3. What Spring Framework / Spring MVC Improves

The lesson presents Spring MVC as an approach that addresses several difficulties of traditional servlet development.

### A. Annotation-based configuration
Instead of placing all mappings in `web.xml`, Spring MVC uses annotations to declare request mappings and application components. This makes the configuration easier to organize and read.

### B. Inversion of Control (IoC) and Dependency Injection (DI)

**Problem: tight coupling**

If a `Payment` class creates its dependency directly—for example, `new User()`—it controls the creation of that dependency. This makes it harder to substitute a mock object when unit-testing `Payment`.

**IoC (Inversion of Control):** control over object creation and management is handed to the framework.

**DI (Dependency Injection):** a way to implement IoC by supplying a class with the objects it depends on rather than having it create those objects itself.

The lesson uses annotations such as:
- `@Component` — marks a class for Spring management as a bean.
- `@Autowired` — asks Spring to resolve and inject a dependency.

**Benefits of DI**
- Reduces tight coupling between classes.
- Makes dependencies easier to replace with mocks during unit tests.
- Lets Spring manage bean creation and dependency resolution.

> Key distinction: DI is a common way to implement IoC; the terms are closely related but are not strictly identical.

### C. More organized REST API handling
With servlet-style code, a servlet may use many `if` / `else if` checks to distinguish URL paths. Spring MVC allows request mappings to be declared more directly, for example with `@GetMapping` or `@RequestMapping`.

This helps organize endpoints and separate request-handling methods.

### D. Integrations
The lesson notes that Spring can integrate with different technologies according to an application's needs, including:
- **Testing:** JUnit and Mockito
- **Data access:** JDBC, JPA, Hibernate
- **Other areas:** asynchronous programming, caching, messaging, and security

---

## 4. Spring MVC Request Flow

### Important components
- **Servlet container:** receives the HTTP request.
- **DispatcherServlet:** Spring MVC's front controller; receives incoming requests and coordinates their handling.
- **Handler mapping:** helps determine which controller and method match the incoming request.
- **Controller:** contains endpoint-handling methods, commonly declared with annotations such as `@Controller` and request-mapping annotations.
- **IoC container / dependency injection:** manages Spring beans and resolves their dependencies.

### Request flow
1. The client sends a request to the servlet container.
2. The container passes the request to Spring MVC's `DispatcherServlet`.
3. `DispatcherServlet` consults handler-mapping information.
4. Spring identifies the matching controller and handler method.
5. Spring creates/manages the required controller bean and resolves its dependencies through IoC/DI.
6. The matching method processes the request.
7. A response is returned to the client.

### Traditional Spring MVC setup described in the lesson
A basic application may require several pieces of setup, such as:
- A controller class with endpoint mappings
- A Maven `pom.xml` containing dependencies and versions
- A configuration class, including component scanning
- DispatcherServlet configuration and servlet mappings

This configuration overhead motivates the use of Spring Boot.

---

## 5. What Spring Boot Adds

Spring Boot keeps the benefits of the Spring Framework / Spring MVC approach while reducing setup and configuration work.

### A. Dependency management with starters
In a traditional setup, developers may need to list multiple dependencies and specify versions, then ensure that the versions are compatible.

Spring Boot provides **starter dependencies** that bring in commonly needed dependency groups. The lesson's examples include:
- `spring-boot-starter-web` — common dependencies for building web applications
- `spring-boot-starter-test` — common testing dependencies

Spring Boot's dependency management supplies compatible versions for managed dependencies, so developers often do not need to specify each version individually.

### B. Auto-configuration
Spring Boot configures many common application components automatically based on the application's dependencies and setup.

The lesson emphasizes that developers generally do not need to manually configure all the pieces that a basic Spring MVC application requires, such as DispatcherServlet and common web configuration.

### C. Convention over configuration
Spring Boot provides sensible defaults and conventions so developers can get started quickly. If a default does not suit the application, it can be overridden with explicit configuration.

The lesson describes Spring Boot as **opinionated**: it chooses defaults for common situations, while still allowing customization.

Component scanning commonly starts from the package containing the main application class and its subpackages, so placing the main class in an appropriate package is important.

### D. Embedded server
With a typical Spring Boot web application:
- A servlet container such as Tomcat can be included as an embedded server.
- Developers can run the application directly.
- They do not have to manually package a WAR and deploy it to a separately managed Tomcat server for the usual development workflow.

The application starts the embedded server, which listens on a configured port.

---

## 6. A Typical Spring Boot Application

A minimal example described in the lesson contains:
- A Maven `pom.xml` with the Spring Boot parent and starter dependencies
- A controller class with a request mapping
- A main application class with `@SpringBootApplication` and a `main()` method

`@SpringBootApplication` is the main annotation highlighted in the lesson. It brings together key Spring Boot application features, including auto-configuration and component scanning, along with Spring Boot configuration.

### Example request flow in Spring Boot
1. Run the application's `main()` method.
2. Spring Boot configures the application and starts the embedded server.
3. A client calls an endpoint such as `/my-api/first-api`.
4. Internally, Spring MVC's DispatcherServlet receives the request.
5. Request mappings identify the matching controller method.
6. Spring resolves required dependencies, if any.
7. The method executes and returns the response.

**Important:** Spring Boot still uses Spring MVC's request-processing infrastructure when building a typical Spring MVC web application. Much of the setup is simply handled automatically.

---

## 7. Spring MVC vs Spring Boot

| Topic | Traditional Spring MVC setup (as described in the lesson) | Spring Boot |
|---|---|---|
| Dependencies | Developers list dependencies and often specify versions manually | Starter dependencies simplify dependency selection; managed versions help maintain compatibility |
| Configuration | More explicit configuration classes and servlet setup | Auto-configuration provides common defaults |
| Component scanning | Often configured explicitly | Commonly configured by default from the main application package |
| Server | Commonly packaged as a WAR and deployed to an external servlet container | Commonly runs with an embedded servlet container |
| Starting the app | Requires the relevant deployment setup | Usually run the application directly |
| Request handling | DispatcherServlet, handler mappings, and controllers | Same underlying Spring MVC concepts for a typical MVC web app |

---

## 8. Key Terms to Remember

- **Servlet:** Java class that handles an HTTP request and produces a response.
- **Servlet container:** Manages servlets; Tomcat is an example.
- **`web.xml`:** Traditional XML file for web-application configuration and servlet mappings.
- **WAR:** Web Application Archive, traditionally deployed to a servlet container.
- **Spring MVC:** Spring web framework that uses DispatcherServlet, handler mappings, and controllers.
- **DispatcherServlet:** Front controller that coordinates incoming Spring MVC requests.
- **Handler mapping:** Maps an incoming request to the appropriate handler/controller method.
- **Controller:** Component containing request-handling methods.
- **IoC:** Inversion of Control; the framework manages object creation and application wiring.
- **DI:** Dependency Injection; required objects are supplied to a class.
- **Bean:** An object managed by the Spring container.
- **Starter dependency:** A convenient dependency bundle for a common application purpose.
- **Auto-configuration:** Automatic setup of common application configuration.
- **Convention over configuration:** Use sensible defaults unless explicit configuration is needed.
- **Embedded server:** Server included with the application and started when the application runs.

---

## 9. Quick Revision

**Why was Spring MVC useful?**
- Reduced reliance on large `web.xml` files through annotation-based configuration.
- Improved dependency management through IoC/DI.
- Made endpoint mapping more organized.
- Offered integrations with testing, data, and other technologies.

**Why is Spring Boot useful?**
- Simplifies dependency management through starters and managed versions.
- Reduces manual setup through auto-configuration.
- Uses sensible defaults (convention over configuration).
- Makes it easy to run an application with an embedded server.

**Remember the progression:**

`Servlets → Spring MVC → Spring Boot`

- Servlets provide the basic request/response foundation.
- Spring MVC organizes request handling and dependency management.
- Spring Boot simplifies setup, configuration, dependency management, and application startup.

---

## 10. Self-Test Questions

1. What is a servlet, and what does a servlet container do?
2. What problem did `web.xml` mappings create as applications grew?
3. What is the role of DispatcherServlet in Spring MVC?
4. How does handler mapping help process a request?
5. What is the difference between IoC and DI?
6. Why can creating dependencies directly with `new` make unit testing harder?
7. What are Spring Boot starter dependencies?
8. What does Spring Boot auto-configuration do?
9. What is meant by convention over configuration?
10. What is the advantage of an embedded server?
11. Does Spring Boot replace DispatcherServlet in a typical Spring MVC web application?
12. Name the three major Spring Boot advantages emphasized in the lesson.

### Answers for quick checking
1. A servlet handles a client request and returns a response; the container manages servlets.
2. The file can become large and difficult to maintain when it contains many mappings and other configuration.
3. It acts as the front controller and coordinates request handling.
4. It helps identify the controller and method that match the incoming request.
5. IoC is the broader principle of handing control to the framework; DI supplies required dependencies.
6. It makes it harder to substitute a mock dependency.
7. They bring in commonly needed groups of dependencies.
8. It configures many common application components automatically.
9. Sensible defaults are used unless developers override them.
10. The app can start its server directly without manually deploying to an external server in the usual workflow.
11. No. Spring Boot simplifies setup; typical Spring MVC request handling still uses DispatcherServlet.
12. Dependency management, auto-configuration, and an embedded server.

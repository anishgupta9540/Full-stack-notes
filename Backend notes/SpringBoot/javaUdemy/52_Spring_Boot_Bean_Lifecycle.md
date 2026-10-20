# Spring Boot: Beans and Bean Lifecycle — Detailed Notes

These notes cover the complete class, organized into definitions, annotations, examples, bean discovery, initialization, dependency injection, and the bean lifecycle. I've also corrected a few technical inaccuracies from the lecture so the notes are useful for revision and interviews.

## 1. What is a Spring Bean?

A Spring Bean is a Java object that is created, configured, and managed by the Spring IoC container.

A normal Java object and a Spring Bean are both Java objects. The difference is who manages the object and its lifecycle.

| Normal Java object                               | Spring Bean                                      |
| ------------------------------------------------ | ------------------------------------------------ |
| Usually created manually using `new`             | Created or registered by Spring                  |
| Application code manages its creation and use    | Spring manages its lifecycle and configuration   |
| Dependencies are commonly provided manually      | Dependencies can be injected by Spring           |
| Cleanup is generally handled by application code | Spring can invoke configured lifecycle callbacks |

### Example: Normal Java object

```
public class User {
    private String username;
    private String email;
}
```

Creating the object manually:

```
User user = new User();
```

This object is not automatically a Spring Bean because it was created directly by our code.

### Example: Spring Bean

```
import org.springframework.stereotype.Component;

@Component
public class User {
    private String username;
    private String email;
}
```

Spring can discover this class during component scanning and register an instance as a Bean.

Important: Adding `@Component` does not create a Bean by itself in every situation. The class must be discovered through component scanning or registered through another Spring configuration mechanism.

## 2. What is the IoC Container?

IoC stands for Inversion of Control.

In traditional Java development, our code often creates objects and manages their dependencies. With Spring, responsibility for creating and managing configured objects is transferred to the Spring container.

This is called Inversion of Control.

### What does the IoC container do?

- Discovers or receives Bean definitions.
- Creates Bean instances.
- Resolves and injects dependencies.
- Applies configuration and initialization callbacks.
- Manages Bean scopes.
- Invokes destruction callbacks when applicable.

The main Spring container interfaces are:

- `BeanFactory` — the fundamental container interface.
- `ApplicationContext` — a more feature-rich container used by most Spring Boot applications.

For example, Spring Boot commonly creates an `ApplicationContext` when the application starts.

Spring IoC Container

ApplicationContext

Discover Beans

Component scanning and configuration

Create Beans

Instantiate objects

Inject Dependencies

Connect related Beans

Manage Lifecycle

Initialize and destroy

## 3. Two common ways to create Spring Beans

The lecture focuses on two approaches:

1. `@Component` — register a class for component scanning.
2. `@Bean` — explicitly declare a method that produces a Bean.

### A. Using `@Component`

`@Component` is a class-level annotation from Spring.

```
import org.springframework.stereotype.Component;

@Component
public class User {

    private String username;
    private String email;

    public User() {
        System.out.println("User created");
    }
}
```

When Spring discovers this class, it registers a Bean definition and creates a `User` instance according to the container's lifecycle rules.

This approach follows convention over configuration: Spring provides default behavior, so you don't need to write an explicit factory method for every simple class.

For example, Spring can instantiate a class with an accessible no-argument constructor without you specifying how to call that constructor.

However, convention over configuration does not mean that Spring can automatically guess arbitrary constructor arguments or application-specific values.

### B. Using `@Bean`

`@Bean` is typically used on a method inside a class annotated with `@Configuration`.

```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public User user() {
        return new User("shreyansh", "shreyansh@example.com");
    }
}
```

The `User` class:

```
public class User {

    private final String username;
    private final String email;

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }
}
```

Here, the `@Bean` method tells Spring how to produce a `User` instance.

- The method's return type is `User`.
- The method's name is `user`.
- The method body defines how the object is constructed.
- The returned object is registered and managed as a Spring Bean.

By default, the Bean's name is the method name, `user`, unless a different name is specified.

Key distinction: `@Component` is usually appropriate for classes you own and want Spring to discover. `@Bean` is particularly useful when object creation requires explicit configuration, custom constructor arguments, or a third-party class you cannot annotate.

## 4. Difference between `@Component` and `@Bean`

| Feature                   | `@Component`                                                            | `@Bean`                                                         |
| ------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| Applied to                | Class                                                                   | Method                                                          |
| Bean creation             | Spring discovers and instantiates the class                             | Spring invokes the factory method                               |
| Object construction       | Usually follows the class's constructors and dependency injection rules | You explicitly define the creation logic                        |
| Configuration             | Minimal for straightforward classes                                     | More control over object creation                               |
| Common use                | Your own services, repositories, components                             | Third-party objects, custom configuration, complex construction |
| Bean name                 | Usually derived from the class name                                     | Defaults to the method name                                     |
| Requires `@Configuration` | No, but requires discovery or registration                              | Typically declared inside a configuration class                 |

### Important correction about constructors

The lecture suggests that if a class has a parameterized constructor but no default constructor, you must use `@Bean`.

That is not always true.

Spring can create a `@Component` with a parameterized constructor and inject its dependencies if those dependencies are resolvable.

For example:

```
@Component
public class UserService {

    private final OrderService orderService;

    public UserService(OrderService orderService) {
        this.orderService = orderService;
    }
}
```

Spring can inject the `OrderService` Bean through the constructor. In modern Spring, if the class has only one constructor, `@Autowired` is generally unnecessary.

However, if you need to pass arbitrary values such as a particular username or email, or construct an object from a third-party library, `@Bean` may be more appropriate.

### Example: Creating an object with custom values

```
@Configuration
public class AppConfig {

    @Bean
    public User user() {
        return new User("admin", "admin@example.com");
    }
}
```

Spring does not need a no-argument constructor in this example because your factory method invokes the parameterized constructor itself.

## 5. Understanding `@Service`, `@Repository`, and `@Controller`

These annotations are specialized forms of `@Component`.

`@Component`

General-purpose Spring-managed component.

```
@Component
public class EmailFormatter { }
```

`@Service`

Typically used for business logic.

```
@Service
public class UserService { }
```

`@Repository`

Typically used for data-access classes. It can also participate in persistence exception translation.

```
@Repository
public class UserRepository { }
```

`@Controller`

Used for Spring MVC web controllers.

```
@Controller
public class HomeController { }
```

`@RestController` is another common specialization used for REST APIs. It combines controller behavior with response-body handling.

All these annotations enable component discovery when their classes fall within the relevant scan scope.

## 6. What is `@Configuration`?

`@Configuration` marks a class as a source of Bean definitions.

```
@Configuration
public class AppConfig {

    @Bean
    public User user() {
        return new User("shreyansh", "shreyansh@example.com");
    }

    @Bean
    public OrderService orderService() {
        return new OrderService();
    }
}
```

In this example, Spring registers the objects returned by both Bean methods.

A configuration class can contain multiple `@Bean` methods, including methods that return the same Java type.

Important: `@Configuration` is itself a specialized component annotation, so configuration classes can be discovered by component scanning.

### What if the same type has multiple `@Bean` methods?

```
@Configuration
public class AppConfig {

    @Bean
    public User adminUser() {
        return new User("admin", "admin@example.com");
    }

    @Bean
    public User guestUser() {
        return new User("guest", "guest@example.com");
    }
}
```

Spring generally registers two separate singleton Beans:

- `adminUser`
- `guestUser`

Both are of type `User`, but they are distinct Beans with different configurations.

When another class requests a `User` dependency, Spring needs to determine which Bean to inject.

### Using `@Qualifier`

```
@Service
public class WelcomeService {

    private final User user;

    public WelcomeService(@Qualifier("adminUser") User user) {
        this.user = user;
    }
}
```

This tells Spring to inject the Bean named `adminUser`.

### Using `@Primary`

Alternatively, you can designate one Bean as the preferred candidate:

```
@Bean
@Primary
public User adminUser() {
    return new User("admin", "admin@example.com");
}
```

If there is one suitable `@Primary` candidate, Spring normally selects it when resolving an otherwise ambiguous dependency by type.

Interview point: Multiple Beans of the same type can exist. They do not automatically overwrite each other; use qualifiers, primary selection, or other appropriate injection mechanisms to resolve ambiguity.

## 7. How does Spring Boot find Beans?

The lecture introduces two main mechanisms:

1. Component scanning.
2. Configuration classes and their Bean methods.

### A. Component scanning with `@ComponentScan`

Example:

```
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}
```

Spring scans the specified package and its subpackages for eligible components, such as:

- `@Component`
- `@Service`
- `@Repository`
- `@Controller`
- `@Configuration`

Discovered components can then be registered as Beans.

For example, suppose the application has this structure:

com.example

controller

HomeController.java — `@Controller`

service

UserService.java — `@Service`

repository

UserRepository.java — `@Repository`

If the component scan starts at `com.example`, the eligible components in these subpackages can be discovered.

### B. The role of `@SpringBootApplication`

A typical Spring Boot main class looks like this:

```
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

`@SpringBootApplication` combines three annotations:

- `@SpringBootConfiguration` — identifies the class as a configuration source.
- `@EnableAutoConfiguration` — enables Spring Boot's auto-configuration mechanism.
- `@ComponentScan` — enables component scanning.

By default, component scanning starts from the package containing the main application class and includes its subpackages.

Best practice: Put your main application class in a top-level package above your controllers, services, repositories, and other application components.

If a class is outside the scan scope, Spring may not discover it unless you explicitly configure scanning or register the Bean another way.

### C. How are `@Bean` methods discovered?

When Spring registers a configuration class, it processes its `@Bean` methods and registers Bean definitions for the returned objects.

For example:

```
@Configuration
public class AppConfig {

    @Bean
    public User user() {
        return new User("admin", "admin@example.com");
    }
}
```

The configuration class must itself be registered or discovered. Simply writing `@Bean` inside an otherwise undiscovered class is not enough.

### Summary of Bean discovery

| Mechanism                | Purpose                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `@ComponentScan`         | Discovers annotated component classes                                                      |
| `@Configuration`         | Declares a configuration source                                                            |
| `@Bean`                  | Declares a method that produces a Bean                                                     |
| `@SpringBootApplication` | Enables default component scanning and auto-configuration along with configuration support |

## 8. When are Beans created? Eager vs. lazy initialization

Bean creation timing is an important topic from the lecture.

### A. Eager initialization

Eager initialization means that a Bean is created during application-context initialization rather than waiting for its first explicit use.

For ordinary singleton Beans, eager initialization is the default in a typical Spring application context.

```
@Component
public class User {

    public User() {
        System.out.println("Initializing User");
    }
}
```

When the application context starts, Spring normally creates this singleton Bean even if no other class has requested it yet.

Expected output during startup:

```
Initializing User
```

The precise position of this message among other startup logs can vary.

### B. Lazy initialization with `@Lazy`

```
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Lazy
@Component
public class OrderService {

    public OrderService() {
        System.out.println("Initializing OrderService");
    }
}
```

`@Lazy` tells Spring to defer initialization until the Bean is needed, rather than creating it eagerly at startup.

For a lazy singleton, this normally means the first request for the Bean triggers its creation.

### C. What if a lazy Bean is injected into an eager Bean?

Consider these two classes:

```
@Component
public class UserService {

    private final OrderService orderService;

    public UserService(OrderService orderService) {
        this.orderService = orderService;
        System.out.println("Initializing UserService");
    }
}
```

```
@Lazy
@Component
public class OrderService {

    public OrderService() {
        System.out.println("Initializing OrderService");
    }
}
```

When the context starts, Spring creates `UserService`. It also needs to resolve its `OrderService` dependency.

With ordinary direct constructor injection, the `OrderService` Bean must be created to satisfy that dependency. Therefore, the lazy Bean is initialized during startup as part of creating `UserService`.

This is a key point:

`@Lazy` does not guarantee that a Bean will wait until a business method explicitly uses it. A dependency needed by an eagerly created Bean can cause it to be initialized early.

If you want to defer resolving a dependency as well, you can use a lazy-resolution mechanism such as `@Lazy` on the injection point or an `ObjectProvider<OrderService>`.

### Eager vs. lazy at a glance

| Feature                            | Eager singleton | Lazy singleton    |
| ---------------------------------- | --------------- | ----------------- |
| Default behavior                   | Yes, normally   | No                |
| Created during context startup     | Normally yes    | Normally deferred |
| Created when first needed          | Already exists  | Normally yes      |
| Can dependencies trigger creation? | Yes             | Yes               |
| Annotation                         | None required   | `@Lazy`           |

### Important correction: prototype scope

The lecture associates prototype scope with lazy initialization. These are actually two different concepts.

- Scope defines how Spring creates and supplies instances.
- Lazy initialization defines when initialization is deferred.

A prototype Bean is normally created whenever the container is asked to resolve it, rather than being created once and reused like a singleton. It is not simply a lazy singleton.

Also, the scope and lazy-initialization settings can interact with dependency injection. A prototype injected directly into a singleton is usually resolved once when the singleton is created; it is not automatically recreated on every method call.

## 9. Complete Spring Bean Lifecycle

The Bean lifecycle describes the stages a Spring-managed object goes through, from creation until destruction.

The lecture's simplified lifecycle is:

### 1

ApplicationContext starts

Spring initializes the container

### 2

Bean definitions are discovered

Components, configuration and @Bean methods

### 3

Bean is instantiated

Constructor creates the object

### 4

Dependencies are injected

Constructor, setter or field injection

### 5

Initialization callbacks

Post-construct and other initialization processing

### 6

Bean is ready for use

Application code uses the Bean

### 7

Destruction callbacks

Cleanup when the container shuts down

This is a simplified learning model, not every internal Spring lifecycle operation. In practice, Bean post-processors, awareness callbacks, initialization methods, proxies, and other framework operations can participate in the lifecycle.

### Step 1: ApplicationContext starts

The main method starts Spring Boot:

```
SpringApplication.run(Application.class, args);
```

Spring creates and initializes the application context. The context coordinates Bean definition registration, dependency resolution, and Bean lifecycle processing.

### Step 2: Spring discovers Bean definitions

Spring registers Bean definitions through component scanning, configuration classes, auto-configuration, and other registration mechanisms.

A Bean definition describes how a Bean should be created and configured. It is not necessarily the Bean instance itself.

### Step 3: Spring instantiates the Bean

Instantiation means creating the Java object, typically by invoking a constructor or a factory method.

```
@Component
public class User {

    public User() {
        System.out.println("Initializing User");
    }
}
```

When Spring instantiates this class, the constructor message is printed.

At this point, the object may not yet have completed dependency injection or initialization.

### Step 4: Dependency injection takes place

Suppose `UserService` requires `OrderService`.

```
@Component
public class OrderService {
}
```

```
@Service
public class UserService {

    private final OrderService orderService;

    public UserService(OrderService orderService) {
        this.orderService = orderService;
    }
}
```

Spring resolves the `OrderService` dependency and passes it into the constructor of `UserService`.

If `OrderService` does not yet exist, Spring can create it according to its Bean definition and lifecycle requirements.

Constructor injection is generally preferred because required dependencies are explicit and can be held in `final` fields.

### Step 5: Initialization callbacks run

After instantiation and dependency injection, Spring performs further initialization processing.

One common lifecycle callback is `@PostConstruct`.

```
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class User {

    public User() {
        System.out.println("1. Constructor called");
    }

    @PostConstruct
    public void initialize() {
        System.out.println("2. Dependencies injected; initialization callback");
    }
}
```

Typical output:

```
1. Constructor called
2. Dependencies injected; initialization callback
```

The constructor executes before `@PostConstruct`.

In modern Spring Boot versions, use `jakarta.annotation.PostConstruct`. Older Spring Boot versions may use `javax.annotation.PostConstruct`.

### Step 6: Bean is ready for application use

Once initialization finishes successfully, the Bean is ready to participate in application operations.

For example:

```
userService.processUser();
```

The application can use the injected `UserService` and its dependencies.

Note that the application might not immediately invoke a business method after initialization. "Ready for use" means the Bean has completed the relevant initialization stages.

### Step 7: Destruction callbacks run

Before a managed Bean is destroyed, Spring can invoke a destruction callback such as `@PreDestroy`.

```
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class User {

    @PreDestroy
    public void cleanup() {
        System.out.println("Cleaning up User resources");
    }
}
```

The method can be used for cleanup operations, such as releasing resources owned by the Bean.

However, the lifecycle callback is not a substitute for correct resource management. Use appropriate `try-with-resources`, connection-pool, and framework-managed resource patterns where relevant.

## 10. Understanding `@PostConstruct`

`@PostConstruct` marks a method that should run after dependency injection and before the Bean is considered fully initialized.

### Example

```
@Component
public class UserService {

    private final OrderService orderService;

    public UserService(OrderService orderService) {
        this.orderService = orderService;
        System.out.println("UserService constructor");
    }

    @PostConstruct
    public void init() {
        System.out.println("UserService initialized");
    }
}
```

Assuming the dependencies are successfully resolved, the sequence is:

1. Spring creates the required dependencies as needed.
2. Spring constructs `UserService`.
3. Spring injects dependencies through the constructor.
4. Spring runs the applicable initialization processing.
5. The `@PostConstruct` method executes.
6. The Bean completes initialization and becomes available for normal use.

### Common uses

- Validating required configuration.
- Initializing internal data structures.
- Preparing in-memory lookup tables.
- Logging successful initialization.
- Performing small setup operations that require injected dependencies.

### Important points

- It is invoked by the lifecycle framework, not automatically by ordinary Java object construction.
- The method must not require application code to call it manually.
- It should generally be a no-argument method.
- It should not be used for expensive or blocking operations without considering their impact on application startup.
- If initialization fails, application-context startup or Bean creation can fail.

## 11. Understanding `@PreDestroy`

`@PreDestroy` marks a method that Spring calls before destroying a managed Bean, when that Bean's destruction lifecycle is supported and executed.

### Example

```
@Component
public class UserService {

    @PostConstruct
    public void init() {
        System.out.println("UserService initialized");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("UserService is being destroyed");
    }
}
```

A typical sequence during a normal application shutdown is:

```
UserService initialized
... application runs ...
UserService is being destroyed
```

### Common uses

- Releasing resources owned by the Bean.
- Stopping a custom background task.
- Closing a resource created and owned by the Bean.
- Logging shutdown events.
- Performing final cleanup.

### When is `@PreDestroy` called?

For a typical Spring Boot application, the context is closed during an orderly shutdown, allowing Spring to invoke applicable destruction callbacks.

In the lecture, the instructor explicitly closes the application context to demonstrate this behavior.

Conceptually:

```
ConfigurableApplicationContext context =
        SpringApplication.run(Application.class, args);

context.close();
```

When `close()` is called, the container shuts down and invokes the appropriate destruction callbacks for its managed Beans.

In normal applications, you generally should not close the context immediately after startup. Spring Boot ordinarily manages application lifetime for you.

Limitation: Destruction callbacks are not guaranteed after a forced process termination, a crash, or circumstances where graceful shutdown cannot run.

## 12. Demonstration: Observe the full Bean lifecycle

The following example combines the major lifecycle stages.

```
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class User {

    public User() {
        System.out.println("1. User constructor called");
    }

    @PostConstruct
    public void init() {
        System.out.println("2. User initialized");
    }

    public void showUser() {
        System.out.println("3. Using User Bean");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("4. User cleanup");
    }
}
```

For a typical eagerly initialized singleton, the conceptual output is:

```
1. User constructor called
2. User initialized
```

When the application calls `showUser()`:

```
3. Using User Bean
```

When the application context shuts down gracefully:

```
4. User cleanup
```

The exact order of messages relative to other Beans can vary because Spring may create and destroy many Beans, and dependency relationships can influence their processing order.

### Lifecycle with dependency injection

Consider this relationship:

```
UserService
    |
    | requires
    v
OrderService
```

Spring must resolve the dependency before completing initialization of `UserService`.

A simplified sequence for eagerly initialized singleton Beans might be:

```
Create OrderService
Initialize OrderService
Create UserService with OrderService
Initialize UserService
Application uses UserService
Shutdown begins
Destroy applicable Beans
```

This illustrates an important point: a Bean's dependency graph affects the order in which objects are created and initialized.

## 13. Important concepts to remember

### Bean vs. Java object vs. Bean definition

These terms are related but not identical.

| Term            | Meaning                                                           |
| --------------- | ----------------------------------------------------------------- |
| Java object     | An instance of a Java class                                       |
| Bean definition | Metadata describing how Spring should create and configure a Bean |
| Spring Bean     | An object managed by the Spring container                         |

A class does not become a managed Bean merely because it exists in the project. Spring must discover or register it.

### Does Spring create only one object per class?

No. The answer depends on the Bean definition and scope.

- A singleton Bean normally has one instance per Bean definition per container.
- A prototype Bean produces a new instance when the container resolves it.
- Multiple Bean definitions can return objects of the same Java type.

For example, `adminUser` and `guestUser` are two distinct singleton Beans, even though both have the type `User`.

### Does Spring inject a dependency only if the Bean already exists?

Not necessarily. Spring resolves the dependency from the container. If the required Bean has not yet been instantiated, Spring can create it.

For example, if an eager `UserService` requires a lazy `OrderService` through direct constructor injection, resolving that dependency normally causes `OrderService` to be instantiated during startup.

## 14. Common mistakes and corrections

| Misconception                                         | Correct understanding                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `@Component` always needs a default constructor       | Spring can use a suitable parameterized constructor when its dependencies can be resolved.              |
| `@Bean` is mandatory for constructor arguments        | `@Bean` is useful for custom construction, but constructor injection works for components too.          |
| `@Configuration` creates every class in the project   | It declares a configuration source; scanning and registration determine which classes Spring discovers. |
| Multiple Beans of the same type overwrite one another | They can coexist; ambiguity must be resolved when injecting by type.                                    |
| Prototype means lazy                                  | Scope and initialization timing are separate concepts.                                                  |
| `@Lazy` always prevents startup initialization        | A direct dependency from an eager Bean can trigger the lazy Bean's creation.                            |
| `@PostConstruct` runs inside the constructor          | It runs later, after dependency injection and before initialization is complete.                        |
| `@PreDestroy` always runs when the program stops      | It normally runs during managed, orderly context shutdown, not every possible termination.              |
| Every Spring Bean is created at application startup   | Lazy Beans and other scoped Beans may be created later, depending on how they are requested.            |

## 15. Interview questions and answers

Test your understanding

Reveal all answers

1\. What is a Spring Bean?

2\. What is the difference between @Component and @Bean?

3\. What is the IoC container?

4\. What is the difference between eager and lazy initialization?

5\. What is @PostConstruct?

6\. What is @PreDestroy?

7\. How does Spring Boot discover components?

8\. What happens when two Beans of the same type exist?

9\. Does a prototype Bean always get created at startup?

10\. What happens when a lazy Bean is injected directly into an eager singleton?

## 16. Quick revision sheet

Bean

A Java object managed by Spring.

`@Component` and `@Bean`

Two common ways to register Beans: class-based discovery and explicit factory methods.

Bean discovery

`@ComponentScan`, `@Configuration`, `@Bean`, and Spring Boot auto-configuration.

Initialization timing

Singleton Beans are normally eager by default; `@Lazy` can defer initialization.

Dependency injection

Spring resolves dependencies through constructor, setter, or field injection. Constructor injection is generally preferred for required dependencies.

Bean lifecycle

Instantiation → dependency injection → initialization → use → destruction.

Lifecycle annotations

`@PostConstruct` runs after dependency injection; `@PreDestroy` runs before managed destruction.

### Recommended order for studying

1. Understand IoC and what makes an object a Bean.
2. Practice `@Component`, `@Configuration`, and `@Bean`.
3. Learn component scanning and how Spring Boot finds Bean definitions.
4. Understand singleton, prototype, and lazy initialization.
5. Practice constructor-based dependency injection and `@Qualifier`.
6. Build a small application to observe constructor, `@PostConstruct`, and `@PreDestroy` execution.

The most important takeaway is that Spring does more than create objects: it manages their dependencies and lifecycle according to the Bean definitions, scopes, and configuration you provide.
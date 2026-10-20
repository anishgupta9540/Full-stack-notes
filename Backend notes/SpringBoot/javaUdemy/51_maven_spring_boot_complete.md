# Maven in Spring Boot: Project Structure, POM, Build Lifecycle, and Repositories

> Structured study notes based on the provided Concept Encoding
> transcript.

## 1. What Is Maven?

Maven is a **project management and build automation tool**. Build
generation is one part of its role. It also supports dependency
resolution, compilation, testing, packaging, installing artifacts
locally, and deploying artifacts to remote repositories.

Maven is configured primarily through the **Project Object Model
(POM)**, usually stored in `pom.xml`. When you run a Maven command from
a project directory, Maven looks for the POM to understand the project
and determine how to execute the requested task.

### Maven vs. Ant

-   With Ant, developers commonly specify both **what** to do and
    **how** to do it through explicit build steps.
-   With Maven, developers usually specify **what** they want to do, and
    Maven's lifecycle, conventions, and plugins determine **how** to do
    it.

For example, `mvn compile` requests compilation without requiring the
developer to write the low-level compiler command and output-directory
steps manually.

## 2. Standard Maven Project Structure

``` text
learning-spring-boot/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/                 # Application source code
│   │   └── resources/             # Application resources/configuration
│   └── test/
│       ├── java/                  # Test source code
│       └── resources/             # Test resources
└── target/                        # Generated build output
```

-   `pom.xml`: project metadata, dependencies, properties, plugins, and
    build configuration.
-   `src/main/java`: application source code.
-   `src/main/resources`: resources such as configuration files.
-   `src/test/java`: test source code.
-   `src/test/resources`: resources used by tests.
-   `target`: generated output, including compiled classes and packaged
    artifacts.

The Java package structure under `src/main/java` generally corresponds
to the project's package name. Maven conventions provide this layout;
the exact package names depend on the project.

## 3. Understanding `pom.xml`

### XML schema

The POM includes XML namespace and schema information. These describe
the expected POM structure. Elements must follow Maven's POM model
rather than being added arbitrarily.

### Parent POM

A project can inherit configuration from a parent POM. Spring Boot
projects commonly use `spring-boot-starter-parent`, which provides
useful defaults and dependency/plugin management.

``` xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version><!-- selected Spring Boot version --></version>
    <relativePath/>
</parent>
```

A POM without an explicitly declared parent still inherits Maven's
built-in **Super POM** defaults. Parent inheritance reduces repeated
configuration in child projects.

### Project coordinates

The core artifact coordinates are:

-   `groupId`: organization or group namespace, often based on a reverse
    domain name.
-   `artifactId`: project or module name.
-   `version`: artifact version.

Together: `groupId:artifactId:version`

Example: `com.example:learning-spring-boot:1.0.0`

These coordinates identify an artifact; they do not automatically mean
it has been published to Maven Central.

### Properties

The `<properties>` section defines reusable key-value values.

``` xml
<properties>
    <java.version>17</java.version>
</properties>
```

Reference a property elsewhere with `${property.name}`, for example
`${java.version}`. This avoids repeating values and makes configuration
easier to maintain. Choose a Java version supported by the selected
Spring Boot release and build environment.

### Dependencies

Dependencies are libraries or modules the project needs. Maven resolves
them using artifact coordinates and repository configuration.

``` xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

A parent POM or dependency-management configuration may manage versions,
so an individual dependency does not always need an explicit
`<version>`.

### Repositories

Repositories tell Maven where artifacts can be retrieved. Maven Central
is commonly available by default, so a project usually does not need to
declare it explicitly.

-   **Repositories** are used to retrieve dependencies and plugins.
-   **Distribution management** configures where the project's artifacts
    are published.

## 4. Maven Build Lifecycle

The lesson focuses on seven phases of Maven's default lifecycle:

  -----------------------------------------------------------------------
  Phase                   Main purpose            Typical command
  ----------------------- ----------------------- -----------------------
  `validate`              Check that the project  `mvn validate`
                          is ready to build       

  `compile`               Compile application     `mvn compile`
                          source code             

  `test`                  Run unit tests          `mvn test`

  `package`               Package compiled code   `mvn package`
                          as a JAR or WAR         

  `verify`                Run configured checks   `mvn verify`
                          to verify the           
                          build/package           

  `install`               Install the artifact    `mvn install`
                          into the local Maven    
                          repository              

  `deploy`                Publish the artifact to `mvn deploy`
                          a configured remote     
                          repository              
  -----------------------------------------------------------------------

These are phases in the **default lifecycle**; Maven has other lifecycle
phases too.

### Earlier phases run first

Invoking a phase normally runs the earlier phases in that lifecycle
first.

``` text
mvn test
  -> validate
  -> compile
  -> test
```

``` text
mvn package
  -> validate
  -> compile
  -> test
  -> package
```

``` text
mvn install
  -> validate
  -> compile
  -> test
  -> package
  -> verify
  -> install
```

Maven may skip work that is already up to date. Plugins and build
configuration can affect details such as how tests are executed, but
lifecycle ordering determines the sequence of phases.

## 5. Phases, Goals, Plugins, and `build`

A **phase** is a step in a lifecycle. A **goal** is a specific task
provided by a plugin. Plugins connect concrete tasks to lifecycle
phases.

Examples include compiling code, running tests, checking code style, and
performing static analysis.

The `<build>` section of `pom.xml` can configure plugins and bind goals
to phases.

``` xml
<build>
    <plugins>
        <plugin>
            <groupId><!-- plugin group --></groupId>
            <artifactId><!-- plugin name --></artifactId>
            <version><!-- plugin version --></version>
            <executions>
                <execution>
                    <phase>validate</phase>
                    <goals>
                        <goal><!-- goal name --></goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

This is a template, not a runnable plugin configuration. The actual
coordinates, version, goal, and configuration depend on the chosen
plugin.

### Example: code-style checks

A code-style plugin can be bound to `validate` so checks run early. This
can help a team enforce shared style rules.

### Example: static analysis

A static-analysis plugin can be bound to `verify` to detect possible
defects or suspicious patterns. The exact checks depend on the tool and
its rules. Maven does not automatically perform every possible style or
static-analysis check; plugins must be configured.

## 6. The Seven Phases in Detail

### 6.1 `validate`

Checks whether the project is in a suitable state to proceed. Additional
checks can be attached through plugins.

### 6.2 `compile`

Compiles source files under `src/main/java` into JVM bytecode (`.class`
files), usually under:

``` text
target/classes/
```

Command:

``` bash
mvn compile
```

Maven uses compiler-plugin configuration and the available JDK to
compile the project.

### 6.3 `test`

Runs unit tests, usually located in `src/test/java`.

``` bash
mvn test
```

This phase includes earlier required phases such as validation and
compilation. If nothing changed, Maven may report that there is nothing
new to compile. Test frameworks and Maven plugins determine how tests
are discovered and executed.

### 6.4 `package`

Packages the compiled application and resources into the selected
artifact format.

``` bash
mvn package
```

For a JAR project, the result is typically placed under `target/`, for
example:

``` text
target/learning-spring-boot-1.0.0.jar
```

The exact filename depends on the artifact ID, version, and
configuration. A Spring Boot executable JAR can include the application
and runtime dependencies needed for its supported launch mode.

### 6.5 `verify`

Runs configured checks to verify the build/package.

``` bash
mvn verify
```

Static analysis, integration checks, and other quality gates run only if
suitable plugins/goals are configured.

### 6.6 `install`

Installs the artifact into the local Maven repository, making it
available to other local Maven projects as a dependency.

``` bash
mvn install
```

The default local repository is typically:

``` text
~/.m2/repository/
```

On Windows, it is usually under the user's home directory in
`.m2/repository`. Artifacts are stored in a directory hierarchy based on
their group ID, artifact ID, and version.

The local repository path can be customized in Maven's `settings.xml`
using the `localRepository` setting. `mvn install` does **not** publish
the artifact remotely.

### 6.7 `deploy`

Publishes the artifact to a configured remote repository.

``` bash
mvn deploy
```

This is commonly used in company build pipelines to publish libraries or
application artifacts to an internal artifact repository. Publishing to
a public repository requires the correct account, authorization, and
publication workflow.

## 7. Local and Remote Repositories

### Local repository

-   Exists on the developer's machine or build agent.
-   Caches downloaded dependencies and plugins.
-   Stores artifacts installed by `mvn install`.
-   Helps avoid repeatedly downloading the same artifact when a suitable
    local copy is available.

Default location: `~/.m2/repository/`

### Remote repository

-   Hosted outside the local project environment.
-   May be public, such as Maven Central, or private, such as a
    company's artifact repository.
-   Can supply dependencies and receive published artifacts, depending
    on permissions and configuration.

### Typical dependency resolution

1.  Maven reads the project's POM.
2.  It checks the local repository for the required artifact.
3.  If the artifact is not available locally, Maven attempts to retrieve
    it from configured remote repositories.
4.  The downloaded artifact is normally cached locally for later builds.

Repository policies and metadata affect when Maven checks for updated
snapshots or other artifacts.

## 8. Deployment with `distributionManagement`

The POM can specify where an artifact should be published.

``` xml
<distributionManagement>
    <repository>
        <id>company-releases</id>
        <url>https://repository.example.com/releases</url>
    </repository>
    <snapshotRepository>
        <id>company-snapshots</id>
        <url>https://repository.example.com/snapshots</url>
    </snapshotRepository>
</distributionManagement>
```

This is an illustrative example. Replace IDs and URLs with values
supplied by the repository administrator.

The `<id>` values match server entries in Maven's `settings.xml`.
Credentials should be kept out of the project POM and source control.

``` xml
<settings>
    <servers>
        <server>
            <id>company-releases</id>
            <username>YOUR_USERNAME</username>
            <password>YOUR_PASSWORD_OR_TOKEN</password>
        </server>
    </servers>
</settings>
```

Use secure credential handling and do not commit real passwords or
tokens. If `mvn deploy` is run without suitable deployment
configuration, Maven may fail because it does not know the destination.
Maven Central is not an unrestricted upload destination; publishing
there requires its own authorization and release process.

## 9. Common Commands Cheat Sheet

  -----------------------------------------------------------------------
  Command                             What it does
  ----------------------------------- -----------------------------------
  `mvn validate`                      Runs the validate phase

  `mvn compile`                       Validates and compiles main source
                                      code

  `mvn test`                          Runs earlier required phases and
                                      unit tests

  `mvn package`                       Runs earlier phases and creates the
                                      package

  `mvn verify`                        Runs earlier phases and configured
                                      verification checks

  `mvn install`                       Runs the lifecycle through install
                                      and stores the artifact locally

  `mvn deploy`                        Runs the lifecycle through deploy
                                      and publishes to the configured
                                      remote repository

  `mvn clean`                         Removes generated build output,
                                      commonly `target/`
  -----------------------------------------------------------------------

## 10. Key Takeaways

-   Maven is a project management and build automation tool configured
    mainly through `pom.xml`.
-   Maven conventions define a standard layout for application and test
    code.
-   A parent POM provides inherited configuration; the Super POM
    supplies Maven defaults.
-   `groupId`, `artifactId`, and `version` are the core coordinates used
    to identify an artifact.
-   Properties provide reusable key-value configuration.
-   Lifecycle phases run in order; requesting a later phase normally
    runs earlier phases first.
-   Plugins provide goals that perform concrete tasks.
-   `package` creates an artifact, `install` stores it locally, and
    `deploy` publishes it to a configured remote repository.
-   Local repositories cache dependencies and store locally installed
    artifacts.
-   Repository credentials should be handled securely.

## 11. Suggested Practice

1.  Open a Spring Boot project's `pom.xml` and identify its parent,
    coordinates, properties, and dependencies.
2.  Run `mvn clean`.
3.  Run `mvn compile` and inspect `target/classes`.
4.  Run `mvn test` and review the test results.
5.  Run `mvn package` and locate the generated JAR.
6.  Run `mvn install` and inspect the artifact under `~/.m2/repository`.
7.  Inspect Maven's `settings.xml` and identify the local repository
    setting.
8.  Learn how a code-style or static-analysis plugin binds a goal to a
    lifecycle phase.
9.  If you have access to a private artifact repository, review your
    team's deployment configuration before running `mvn deploy`.

------------------------------------------------------------------------

*Related study goal mentioned in the lesson: study Core Java in depth
(Collections, multithreading, Java 8 features, etc.) along with
important Spring Boot topics.*

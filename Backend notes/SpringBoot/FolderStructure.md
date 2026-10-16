ecommerce-api/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
├── .gitignore
├── .dockerignore
├── Dockerfile
├── compose.yaml
├── .env
├── .env.example
├── README.md
│
├── .mvn/
│   └── wrapper/
│       └── maven-wrapper.properties
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/company/app/
│   │   │       │
│   │   │       ├── EcommerceApplication.java
│   │   │       │
│   │   │       ├── product/
│   │   │       │   ├── controller/
│   │   │       │   │   └── ProductController.java
│   │   │       │   ├── service/
│   │   │       │   │   └── ProductService.java
│   │   │       │   ├── repository/
│   │   │       │   │   └── ProductRepository.java
│   │   │       │   ├── entity/
│   │   │       │   │   └── Product.java
│   │   │       │   ├── dto/
│   │   │       │   │   ├── ProductRequestDto.java
│   │   │       │   │   └── ProductResponseDto.java
│   │   │       │   └── mapper/
│   │   │       │       └── ProductMapper.java
│   │   │       │
│   │   │       ├── order/
│   │   │       │   ├── controller/
│   │   │       │   │   └── OrderController.java
│   │   │       │   ├── service/
│   │   │       │   │   └── OrderService.java
│   │   │       │   ├── repository/
│   │   │       │   │   └── OrderRepository.java
│   │   │       │   ├── entity/
│   │   │       │   │   └── Order.java
│   │   │       │   ├── dto/
│   │   │       │   │   ├── OrderRequestDto.java
│   │   │       │   │   └── OrderResponseDto.java
│   │   │       │   └── mapper/
│   │   │       │       └── OrderMapper.java
│   │   │       │
│   │   │       ├── payment/
│   │   │       │   ├── controller/
│   │   │       │   │   └── PaymentController.java
│   │   │       │   ├── service/
│   │   │       │   │   └── PaymentService.java
│   │   │       │   ├── repository/
│   │   │       │   │   └── PaymentRepository.java
│   │   │       │   ├── entity/
│   │   │       │   │   └── Payment.java
│   │   │       │   ├── dto/
│   │   │       │   │   ├── PaymentRequestDto.java
│   │   │       │   │   └── PaymentResponseDto.java
│   │   │       │   └── mapper/
│   │   │       │       └── PaymentMapper.java
│   │   │       │
│   │   │       ├── config/
│   │   │       │   ├── AppConfig.java
│   │   │       │   └── DatabaseConfig.java
│   │   │       │
│   │   │       ├── exception/
│   │   │       │   ├── ResourceNotFoundException.java
│   │   │       │   ├── BadRequestException.java
│   │   │       │   └── GlobalExceptionHandler.java
│   │   │       │
│   │   │       ├── security/
│   │   │       │   ├── SecurityConfig.java
│   │   │       │   ├── JwtService.java
│   │   │       │   └── JwtAuthenticationFilter.java
│   │   │       │
│   │   │       └── common/
│   │   │           ├── ApiResponse.java
│   │   │           └── Constants.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties
│   │       └── application-dev.properties
│   │
│   └── test/
│       ├── java/
│       │   └── com/company/app/
│       │       ├── EcommerceApplicationTests.java
│       │       ├── product/
│       │       │   ├── controller/ProductControllerTest.java
│       │       │   ├── service/ProductServiceTest.java
│       │       │   └── repository/ProductRepositoryTest.java
│       │       ├── order/
│       │       │   ├── controller/OrderControllerTest.java
│       │       │   ├── service/OrderServiceTest.java
│       │       │   └── repository/OrderRepositoryTest.java
│       │       ├── payment/
│       │       │   ├── controller/PaymentControllerTest.java
│       │       │   ├── service/PaymentServiceTest.java
│       │       │   └── repository/PaymentRepositoryTest.java
│       │       └── integration/
│       │           ├── ProductApiIntegrationTest.java
│       │           ├── OrderApiIntegrationTest.java
│       │           └── PaymentApiIntegrationTest.java
│       │
│       └── resources/
│           └── application-test.properties
│
├── docs/
│   ├── api-documentation.md
│   └── database-schema.md
│
└── docker/
    └── mysql/
        └── init.sql
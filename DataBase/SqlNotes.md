Explain the ACID properties in the context of databases.
What is database normalization, and why do we use it?
What is denormalization and when would you consider it?
Compare and contrast the DROP, DELETE, and TRUNCATE commands.
What is a prepared statement, and why would you use one?
What is the N+1 query problem and how can you solve it?
What distinguishes TRUNCATE from DELETE, please?
UNION and UNION ALL?

CREATE TABLE employees (
    employeeid INT NOT NULL,
    employeename VARCHAR(10),
    department VARCHAR(10),
    salary FLOAT,
    age INT,
    hiredate DATE,
    managerid INT
);

INSERT INTO employees
(employeeid, employeename, department, salary, age, hiredate, managerid)
VALUES
(101, 'Alice',   'HR',        6000.00, 30, '2015-06-15', NULL),
(102, 'Bob',     'Sales',    12000.00, 35, '2017-08-20', 101),
(103, 'Charlie', 'HR',        5500.00, 28, '2018-03-10', 101),
(104, 'David',   'Sales',     8500.00, 32, '2019-09-15', 102),
(105, 'Eva',     'Marketing', 7000.00, 27, '2020-11-01', 102),
(106, 'Frank',   'Sales',    12000.00, 40, '2016-07-23', NULL),
(107, 'Grace',  'Marketing',  9500.00, 33, '2018-01-12', 105),
(108, 'Hannah',  'HR',        6500.00, 29, '2021-01-12', 101);

select * from employees;

Resources
https://github.com/Devinterview-io/api-design-interview-questions
https://dev.to/guru_prasanna_01/postgresql-tasks-interview-questions-5eob
select customers.contactFirstName , orders.orderNumber from customers 
left join orders on orders.customerNumber = customers.customerNumber
where orderNumber is NULL;


select customers.contactFirstName , orders.orderNumber from customers 
INNER join orders on orders.customerNumber = customers.customerNumber;


select customers.contactFirstName , Count(orders.orderNumber) as ordercount from customers 
INNER join orders on orders.customerNumber = customers.customerNumber
GROUP BY customers.contactFirstName;

select * from 
(select customers.contactFirstName , Count(orders.orderNumber) as ordercount from customers 
INNER join orders on orders.customerNumber = customers.customerNumber
GROUP BY customers.contactFirstName ) temp order by ordercount DESC limit 1; 

SELECT 
    customerNumber, 
    checkNumber, 
    amount
FROM
    payments
WHERE
    amount = (SELECT MAX(amount) FROM payments);

    SELECT 
    status, 
    COUNT(*)
    FROM
    orders 
    GROUP BY 
    status ;


    SELECT 
    CONCAT(m.lastName, ', ', m.firstName) AS Manager,
    CONCAT(e.lastName, ', ', e.firstName) AS 'employeet'
FROM
    employees e
INNER JOIN employees m ON 
    m.employeeNumber = e.reportsTo
ORDER BY 
    Manager;

SELECT 
    IFNULL(CONCAT(m.lastname, ', ', m.firstname),
            'Top Manager') AS 'Manager',
    CONCAT(e.lastname, ', ', e.firstname) AS 'Direct report'
FROM
    employees e
LEFT JOIN employees m ON 
    m.employeeNumber = e.reportsto
ORDER BY 
    manager DESC;

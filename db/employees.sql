

select emp.emp_no , emp.first_name ,dep.dept_name  , emp.gender 
from employees as emp inner JOIN dept_emp as dep_emp 
on emp.emp_no = dep_emp.emp_no
inner JOIN departments as dep 
on dep.dept_no = dep_emp.dept_no 
limit 10;



select emp.gender, count(*)
from employees as emp inner JOIN dept_emp as dep_emp 
on emp.emp_no = dep_emp.emp_no
inner JOIN departments as dep 
on dep.dept_no = dep_emp.dept_no 
--where emp.gender = "M"
Group by emp.gender ;

--331603
select * from employees as emp 
left join dept_emp as dep_emp 
on emp.emp_no = dep_emp.emp_no
where dep_emp.dept_no is NULL;


select emp_no from employees 
where emp_no not in (select  emp_no from dept_emp);

delete dept_emp
select  emp_no from dept_emp limit 10 OFFSET  1;

SELECT e.gender,dp.dept_name, COUNT(*) AS number_of_departments 
FROM employees e JOIN dept_emp d ON e.emp_no = d.emp_no 
join departments dp on dp.dept_no = d.dept_no
GROUP BY d.emp_no,dp.dept_name ;
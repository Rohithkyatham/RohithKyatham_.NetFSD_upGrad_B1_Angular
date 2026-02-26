let employees = [
    { id:1, name:"Ravi", dept:"IT", salary:70000 },
    { id:2, name:"Anita", dept:"HR", salary:50000 },
    { id:3, name:"Karan", dept:"IT", salary:80000 },
    { id:4, name:"Meena", dept:"Finance", salary:60000 }
];

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary Expense:", totalSalary);

let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
let lowest = employees.reduce((min, emp) => emp.salary < min.salary ? emp : min);
console.log("Highest Paid:", highest);
console.log("Lowest Paid:", lowest);

let increasedIT = employees.map(emp =>
    emp.dept === "IT"
        ? { ...emp, salary: emp.salary * 1.15 }
        : emp
);
console.log("IT Salary Increased:", increasedIT);

let grouped = employees.reduce((acc, emp) => {
    if (!acc[emp.dept]) acc[emp.dept] = [];
    acc[emp.dept].push(emp);
    return acc;
}, {});
console.log("Grouped by Department:", grouped);

let deptAverage = employees.reduce((acc, emp) => {
    if (!acc[emp.dept]) acc[emp.dept] = { total: 0, count: 0 };
    acc[emp.dept].total += emp.salary;
    acc[emp.dept].count += 1;
    return acc;
}, {});

for (let dept in deptAverage) {
    deptAverage[dept] = deptAverage[dept].total / deptAverage[dept].count;
}
console.log("Department Wise Average:", deptAverage);

let sortedDesc = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Salary Desc:", sortedDesc);

let afterTax = employees.map(emp => ({
    ...emp,
    salary: emp.salary * 0.9
}));
console.log("After 10% Tax Deduction:", afterTax);

let averageSalary = totalSalary / employees.length;
let aboveAverage = employees.filter(emp => emp.salary > averageSalary);
console.log("Above Average Salary:", aboveAverage);

let table = "<table border='1'><tr><th>ID</th><th>Name</th><th>Dept</th><th>Salary</th></tr>" +
    employees.map(emp =>
        "<tr><td>" + emp.id + "</td><td>" + emp.name + "</td><td>" + emp.dept + "</td><td>" + emp.salary + "</td></tr>"
    ).join("") +
    "</table>";

console.log("HTML Table:");
console.log(table);
// Q4 Employee Inheritance and Runtime Polymorphism
class Employee {
  constructor(name,department) { this.name=name; this.department=department; }
  work() { return `${this.name} is working in ${this.department}.`; }
}
class Manager extends Employee {
  work() { return `${this.name} is managing the ${this.department} department.`; }
}
const team=[new Employee("Riya","Engineering"),new Manager("Arjun","Sales"),new Employee("Meera","Marketing"),new Manager("Dev","Technology")];
team.forEach(person=>console.log(person.work())); // Same call, behavior depends on object.

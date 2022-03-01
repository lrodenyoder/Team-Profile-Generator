class Employee {
  constructor(name = "", id = "", email = "") {
    this.name = name;
    this.id = parseInt(id);
    this.email = email;
    };

    getName() {
        return this.name;
    };
  
//   getId() {}
  
//   getEmail() {}

//   getRole() {}
};

module.exports = Employee;

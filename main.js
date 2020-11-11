//write your code here to make the tests pass

class Document {
    constructor(name) {
        this.EmployeeName = name;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }
    work(office) {
        for (let i = 0; i < 10; i++)
            office.documents.push(new Document(this.name))
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log("Clean");
    }
}


class Manager {
    constructor(name, employees) {
        this.name = name;
        this.employees = []

    }
    hireEmployee(name) {
        this.employees.push(new Employee(name))
    }
    askEmployeesToWork(office) {
        this.employees.forEach(element => {
            element.work(office)
        });
    }
}

class Office {
    constructor() {
        this.cleaners = []
        this.documents = []
        this.managers = []

    }
    hireManager(name) {
        this.managers.push(new Manager(name))
    }
    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }

    startWorkDay() {

        this.managers.forEach(element => {
            element.askEmployeesToWork(this)
        });
        this.cleaners.forEach(element => {
            element.clean()
        });
    }

}
//SKELETON 

class Bank {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    manages() {
        console.log(this.name);
    }
}

class ATM extends Bank {
    constructor(location) {
        this.location = location;
    }
    identifies(password) {
        if(this.password === password) {
            console.log("PIN accepted");
        }else {
            console.log("Incorrect PIN");
        }
    }
}

class Customer {
    constructor(name, address, dob, cardNo, pin) {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardNo = cardNo;
        this.pin = pin;
    }
    verifyPassword(password) {
        if(this.password === password) {
            console.log("Verification Successfull");
        } else {
            console.log("Invalid Credentials");
        }
    }
}

class Account extends Bank, Customer {
    constructor(number, balance) {
        this.number = number;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}

class ATM_Transaction extends Account {
    constructor(id, type, amount, post_balance) {
        this.post_balance = this.balance;
        this.id = id;
        this.type = type;
    }
    getBalance() {
        console.log("Available balance is " + this.balance);
    }
}

class CurrentAccount extends Account{
    constructor() {
        super();
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}

class SavingAmount extends Account {
    constructor() {
        super();
    }
}
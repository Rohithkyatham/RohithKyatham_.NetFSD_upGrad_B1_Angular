class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited: " + amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log("Withdrawn: " + amount);
    }
  }

  checkBalance() {
    console.log("Current Balance: " + this.balance);
  }
}

let acc1 = new BankAccount("Rahul", 1000);
acc1.deposit(500);
acc1.withdraw(200);
acc1.checkBalance();
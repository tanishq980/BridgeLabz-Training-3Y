// Q7 Banking Application with private field
class BankAccount {
  #balance;
  constructor(initialBalance=0) {
    if(!Number.isFinite(initialBalance)||initialBalance<0) throw new Error("Invalid opening balance");
    this.#balance=initialBalance;
  }
  deposit(amount) {
    if(!Number.isFinite(amount)||amount<=0) throw new Error("Deposit must be greater than zero");
    this.#balance+=amount; return this.#balance;
  }
  withdraw(amount) {
    if(!Number.isFinite(amount)||amount<=0) throw new Error("Withdrawal must be greater than zero");
    if(amount>this.#balance) throw new Error("Insufficient balance");
    this.#balance-=amount; return this.#balance;
  }
  getBalance() { return this.#balance; }
}
const account=new BankAccount(5000);
console.log("Opening balance:",account.getBalance());
try { account.deposit(1500); console.log("After deposit:",account.getBalance()); }
catch(e) { console.error("Deposit failed:",e.message); }
try { account.withdraw(10000); }
catch(e) { console.error("Withdrawal failed:",e.message); }
try { account.withdraw(2000); console.log("After valid withdrawal:",account.getBalance()); }
catch(e) { console.error(e.message); }

class BankAccount {
    #accountId;
    #accountTitle;
    #balance;
    #emailID;

    constructor(accountId, accountTitle, balance, emailID) {
        this.#accountId = accountId;
        this.#accountTitle = accountTitle;
        this.#balance = balance;
        this.#emailID = emailID;
    }
    getAccountId() {
        return this.#accountId;
    }

    setAccountId(accountId) {
        this.#accountId = accountId;
    }

    getAccountTitle() {
        return this.#accountTitle;
    }

    setAccountTitle(accountTitle) {
        this.#accountTitle = accountTitle;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance) {
        this.#balance = balance;
    }

    getEmailID() {
        return this.#emailID;
    }

    setEmailID(emailID) {
        this.#emailID = emailID;
    }

    withdrawAmount = (amount) => {
        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }
        this.#balance -= amount;
        console.log("Withdrawn amount: " + amount);
        console.log("Remaining balance: " + this.#balance);
    }
    depositAmount = (amount) => {
        this.#balance += amount;
        console.log("Deposited amount: " + amount);
        console.log("Current balance: " + this.#balance);
    }

}
const account = new BankAccount(1, "Mobeen Hassan", 15000, "mobeenHassan@email.com");
console.log("Account Id: " + account.getAccountId());
console.log("Account Title: " + account.getAccountTitle());
console.log("Email Id: " + account.getEmailID());
console.log("Initial Balance: " + account.getBalance());

account.withdrawAmount(13000);
account.depositAmount(182000);
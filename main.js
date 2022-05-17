class BankAccount {
    constructor(accountnumber, owner){
        this.accountnumber = accountnumber
        this.owner = owner
        this.transaction = []
    }
    balance(){
        let sum = 0
        for(let i = 0; i < this.transaction.length; i++){
            sum += this.transaction[i].amount
        }
        return sum
    }
    deposit(amt){
        if(amt > 0){
            let transaction = new Transaction (amt, "Deposit")
            this.transaction.push(transaction)
        }

    }
    charge(amt, payee){
        if(this.balance() >= amt){
            let transaction = new Transaction(-amt, payee)
            this.transaction.push(transaction)
        }else{

        }

    }
    
}

class Transaction {
    constructor(amount, payee){
        this.date = new Date()
        this.amount = amount
        this.payee = payee
    }
}



class SavingAccount extends BankAccount {
    constructor(interestrate, accountnumber, owner){
        super(accountnumber, owner)
        this.interestrate = interestrate
    }
    accrueInterest(){
        let bal = this.balance()
        let interest = bal * this.interestrate
        let newtransaction = new Transaction(interest, "Interest")
        this.transaction.push(newtransaction)
    }

}



//bank account
console.log("----------BANK ACCOUNT-----------")
let bank1 = new BankAccount ("001", "Jacob")

bank1.deposit(200)

bank1.charge(150, "Ryan")



console.log(bank1.transaction)
console.log(bank1.balance())


//savings account

console.log("----------SAVINGS ACCOUNT-----------")
let savings = new SavingAccount(.10, "002", "Ryan",)

savings.deposit(500)
savings.accrueInterest()

console.log(savings.transaction)
console.log(savings.balance())
class Payment {
    constructor (amount){
        this.amount = amount;
    }

    paymentDetails (){
        console.log( "This is the payment amount " + this.amount);
    }
}

class CashPayment extends Payment{
    constructor (amount){
        super(amount);
    }
    paymentDetails(){
        console.log("This is the payment " + this.amount + " in cash");
    }
}

// class CardPayment extends Payment{
//     constructor (amount){
//         super(amount);
//     }
//     paymentDetails(){
//         console.log("This is the payment " + this.amount + "in card payment");
//     }
// }

class CreditCard {
     constructor(name, expire_date,creditCardNumber){
        this.name = name;
        this.expire_date = expire_date;
        this.creditCardNumber = creditCardNumber;
    }
}
class CardPayment extends Payment{
    constructor (amount, creditcard){
        super(amount);
        this.creditcard = creditcard;
    }
    paymentDetails(){
        console.log("This is the payment " + this.amount + " in card payment");
        console.log("This is the name of card holder " + this.creditcard.name );
        console.log("This is the card expire date " + this.creditcard.expire_date);
        console.log("This is the card number " + this.creditcard.creditCardNumber);
    }
}

function main (){

    const payments = [
        new CashPayment (100000),
        new CashPayment (25000),
        new CardPayment (30000, new CreditCard("Mobeen", "09/27", 54102555324890)),
        new CardPayment (60000, new CreditCard("Mobeen", "09/27", 54102555324890))

    ]

    for (const payment of payments){
        payment.paymentDetails();
        console.log("");
    }

    console.log("Abstraction and polymorhic behaviour achieved as ");
}

main();
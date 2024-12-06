//Q1. Closure-Based Counter Implementation
function createCounter()
{
    let count = 0;
    return{
        increment: function ()
        {
            count++;
            console.log("Current count:", count);
        },
        decrement: function ()
        {
            count--;
            console.log("Current count:", count);
        }
    };
}
const counter1 = createCounter();
counter1.increment(); 
counter1.increment(); 
counter1.decrement(); 
const counter2 = createCounter();
counter2.increment(); 

    //a. Explain how closures are being used to encapsulate the counter variable?
        //Closures allow the inner functions increment and decrement to access the count variable even after createCounter has finished execution.
        //The count variable is encapsulated and not directly accessible outside the returned object.

    //b. What happens if multiple counters are created using the same function?
        //If multiple counters are created, each instance maintains its own separate count variable because each call to createCounter creates a new execution context.
        //Example:
            //const counter1 = createCounter();
            // const counter2 = createCounter();
            // counter1.increment(); // Output: Current count: 1
            // counter1.increment(); // Output: Current count: 2
            // counter2.increment(); // Output: Current count: 1

//Q2. Simulating Private Variables with Closures
function createBankAccount()
{
    let balance = 0;
    const transactionHistory = [];
    return {
        deposit: function (amount)
        {
            balance += amount;
            transactionHistory.push({ type: "Deposit", amount });
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function (amount)
        {
            if (amount > balance)
            {
                console.log("Insufficient balance");
            }
            else
            {
                balance -= amount;
                transactionHistory.push({ type: "Withdrawal", amount });
                console.log(`Withdrawn: ${amount}`);
            }
        },
        checkBalance: function ()
        {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory: function ()
        {
            console.log("Transaction History:", transactionHistory);
        }
    };
}
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance);
account.checkBalance();
account.getTransactionHistory();

    //a. How does the closure ensure that the balance variable is private?
        // The balance and transactionHistory variables are defined in the lexical scope of createBankAccount and are not directly accessible outside it.
        // Only the methods returned by createBankAccount have access to these variables.

    //b. Adding Transaction History
        // Closures enable the transactionHistory feature by maintaining the history in the same private scope as balance. The inner functions can access and update it while keeping it private from external access.
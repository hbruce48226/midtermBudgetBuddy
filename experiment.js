let purchaseType = document.getElementById('purchase-type-dropdown'); //dropdown to choose entertainment, food, clothing, or bills
let purchaseDescription = document.getElementById('purchase-information-description'); //input box to give description of purchase
let purchasePrice = document.getElementById('purchase-information-price'); //input box to give price of purchase



// adds things to the ledger
class Ledger {
    constructor(ledgerItem) {
        this.ledgerItem = ledgerItem;
    }
    print() {
        for (const item of this.ledgerItem) {
            console.log(item);
        }
    }

    display() {
        for (const item of this.ledgerItem) {
            // const div = document.createElement('div'); //create a div for each pass
            const row = document.createElement('tr');
            // const rowItem = document.createElement('td');

            // const rowItemDescription = document.getElementById('')

            row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.date}</td>
            <td>${item.price}</td>
            `
            ledger_table.appendChild(row); //append that to contact list ... always use appendChild() instead of append()

        }
    }

    add(item) {
        this.ledgerItem.push(item);
    }

    deleteAt(index) {
        this.ledgerItem.splice(index, 1);
    }
}


class LedgerItem {
    constructor(description, date, price) {
        this.description = description;
        this.date = date;
        this.price = price;
    }
}

// finds the table element with id 'ledger-table' and assigns it to variable 'ledger_table'
const ledger_table = document.getElementById('ledger-table');

//this is how we create (initialize) our new ledger
const ledger = new Ledger([
    new LedgerItem('Jeans by Lucky', '03.18.2019', '$100'), 
    new LedgerItem('T-shirt by Rag & Bone', '03.18.2019', '$60')
]);
ledger.display(); //so the ledger actually shows up












// this is the main header section: budget, amount spent, balance
let userBudget = document.getElementById('userBudget'); //finds the main paragraph element with id 'userBudget' and assigns it to the variable 'userBudget'
// userBudget = parseInt(userBudget);
let amountSpent = document.getElementById('amountSpent'); //initializes amount spent with $0
// amountSpent.innerHTML = 0; 
let balance = document.getElementById('balance'); //set to 0 now but will be initialized to whatever the userBudget is 
// balance = parseInt(balance);

const addYourBudget = document.getElementById('submit-your-budget'); //finds the button with id 'submit-your-budget' and assigns to variable 'addYourBudget'
// initializes the main header section
// when user inputs their budget, the main header gets populated with the initialized information
addYourBudget.addEventListener('click', () => {
    userBudget.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}`; //looks for value user gives, represents their budget
    amountSpent.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}` * 0; //this will be initialized with 0, no purchases made yet
    balance.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}`; //this will be initialized to whatever the budget is

    console.log(`look at me bitch, the amountSpent is: ${amountSpent.innerHTML}`);
    console.log(`Budget is ${typeof(userBudget)}`);
    console.log(`Amount Spent is ${typeof(amountSpent)}`);
    console.log(`Balance is ${typeof(balance)}`);

});
console.log(`look at me bitch, the amountSpent is: ${amountSpent.innerHTML}`);




// this is the section for adding things to the ledger
// let purchaseType = document.getElementById('purchase-type-dropdown'); //dropdown to choose entertainment, food, clothing, or bills
// let purchaseDescription = document.getElementById('purchase-information-description'); //input box to give description of purchase
// let purchasePrice = document.getElementById('purchase-information-price'); //input box to give price of purchase

// addButton is how a new item/purchase is added to the ledger
// the addButton, when clicked, calls the purchaseUpdater() and gets current userBudget and value of new item's price given in the input box by the user
const addButton = document.getElementById('addButton'); //finds button with id 'addButton' and assigns to varaible 'addButton'
// addButton.getAttribute('onclick',`purchaseUpdater(${amountSpent.innerHTML},${document.getElementById('purchase-information-price').value})`); //addButton calls the purchaseUpdater() function when clicked
// addButton.getAttribute('onclick', `purchaseUpdater()`);



// const inputPriceOfPurchase = document.getElementById('purchase-information-price'); //finds input value of purchase-information-price and assigns it to variable 'inputPriceOfPurchase'
// addButton when clicked calls purchaseUpdater()
addButton.addEventListener('click', () => {
    console.log('button clicked');
    let price = parseInt(purchasePrice.value);
    // purchaseUpdater(balance,inputPriceOfPurchase.value);
    purchaseUpdater(price);
    console.log(amountSpent.innerHTML);
    console.log(`look at me bitch, the amountSpent is: ${amountSpent.innerHTML}`);

    // document.getElementById('balance').innerHTML = `your balance: ${balance}`; //displays the change in budget


    let newLedgerRow = new Ledger([new LedgerItem(`${purchaseDescription.value}`,`03.20.2019`, `$${purchasePrice.value}`)]);
    newLedgerRow.display();
});

// // finds the table element with id 'ledger-table' and assigns it to variable 'ledger_table'
// const ledger_table = document.getElementById('ledger-table');
// //this is how we create (initialize) our new ledger
// const ledger = new Ledger([
//     new LedgerItem('Jeans by Lucky', '03.18.2019', '$100'), 
//     new LedgerItem('T-shirt by Rag & Bone', '03.18.2019', '$60')
// ]);
// ledger.display(); //so the ledger actually shows up






//NEED TO MAKE A DATE FUNCTION THAT RETURNS CURRENT DATE IN MM-DD-YYYY FORMAT




// purchaseUpdater() function is called when addButton is clicked
const purchaseUpdater = (itemPrice) => { //function takes in price of item and changes the budget to reflect purchase
    amountSpent.innerHTML = parseInt(amountSpent.innerHTML) + parseInt(itemPrice); //updates amountSpent
    balance.innerHTML -= itemPrice; //updates budget 
};







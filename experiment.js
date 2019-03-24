let purchaseType = document.getElementById('purchase-type-dropdown'); //dropdown to choose entertainment, food, clothing, or bills
let purchaseDescription = document.getElementById('purchase-information-description'); //input box to give description of purchase
let purchaseDate = document.getElementById('purchase-information-date'); //input box to give date of purchase....automatically pulls today's date if left blank 
let purchasePrice = document.getElementById('purchase-information-price'); //input box to give price of purchase


let entertainmentSpentCounter = 0;
let foodSpentCounter = 0;
let clothingSpentCounter = 0;
let billsSpentCounter = 0;


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
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.date}</td>
            <td>${item.price}</td>
            `

            const ledger_table_entertainment = document.getElementById('ledger-table-entertainment');
            const ledger_table_food = document.getElementById('ledger-table-food');
            const ledger_table_clothing = document.getElementById('ledger-table-clothing');
            const ledger_table_bills = document.getElementById('ledger-table-bills');


            if (purchaseType.value === 'Entertainment') {
                ledger_table_entertainment.appendChild(row);
                entertainmentSpentCounter += parseInt(purchasePrice.value);
            } else if (purchaseType.value === 'Food') {
                ledger_table_food.appendChild(row);
                foodSpentCounter += parseInt(purchasePrice.value);
            } else if (purchaseType.value === 'Clothing') {
                ledger_table_clothing.appendChild(row);
                clothingSpentCounter += parseInt(purchasePrice.value);
            } else if (purchaseType.value === 'Bills') {
                ledger_table_bills.appendChild(row);
                billsSpentCounter += parseInt(purchasePrice.value);
            }
        }
    }
}


class LedgerItem {
    constructor(category, description, date, price) {
        this.category = category;
        this.description = description;
        this.date = date;
        this.price = price;
    }
}





// this is the main header section: budget, amount spent, balance
let userBudget = document.getElementById('userBudget'); //finds the main paragraph element with id 'userBudget' and assigns it to the variable 'userBudget'
let amountSpent = document.getElementById('amountSpent'); //initializes amount spent with $0
let balance = document.getElementById('balance'); //set to 0 now but will be initialized to whatever the userBudget is 

const addYourBudget = document.getElementById('submit-your-budget'); //finds the button with id 'submit-your-budget' and assigns to variable 'addYourBudget'
// initializes the main header section
// when user inputs their budget, the main header gets populated with the initialized information
addYourBudget.addEventListener('click', () => {
    userBudget.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}`; //looks for value user gives, represents their budget
    amountSpent.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}` * 0; //this will be initialized with 0, no purchases made yet
    balance.innerHTML = `${parseInt(document.getElementById('what-is-your-budget').value)}`; //this will be initialized to whatever the budget is
});





// addButton is how a new item/purchase is added to the ledger
// the addButton, when clicked, calls the purchaseUpdater() and gets current userBudget and value of new item's price given in the input box by the user
const addButton = document.getElementById('addButton'); //finds button with id 'addButton' and assigns to varaible 'addButton'

// when clicked, addButton calls purchaseUpdater()
addButton.addEventListener('click', () => {

    //formats the date
    const dateFormat = function () {
        //if the date section is left blank, it will generate today's date in this specific format
        if (purchaseDate.value === '') {
            const rightNow = new Date();
            let theDay = rightNow.getDate().toString();
            let theMonth = rightNow.getMonth() + 1;
            theMonth.toString();
            let theYear = rightNow.getFullYear().toString();

            if (parseInt(theMonth) < 10) {
                theMonth = '0' + theMonth;
            };
            if (parseInt(theDay) < 10) {
                theDay = '0' + theDay;
            };
            let stringDateFormat = theMonth + '.' + theDay + '.' + theYear;
            return stringDateFormat;

        } else { //if the user gives a date (like sometime in the past) then it will take whatever information it is given
            return purchaseDate.value;
        };
    };






    //alerts user if budget is spent
    if (parseInt(balance.innerHTML) - purchasePrice.value >= 0) {
        //update overview header section
        let price = parseInt(purchasePrice.value);
        purchaseUpdater(price);

        //update the ledger
        let newLedgerRow = new Ledger([new LedgerItem(`${purchaseType.value}`, `${purchaseDescription.value}`, `${dateFormat()}`, `$${purchasePrice.value}`)]);
        newLedgerRow.display();

    } else {
        alert('you cannot make this purchase');
        // const blackboxHeaderSection = document.getElementById('blackboxHeader');
        // blackboxHeaderSection.style.backgroundColor = 'rgba(148, 0, 32, 0.6)';
        // blackboxHeaderSection.style.borderRadius = '10px';
        // blackboxHeaderSection.style.margin = '10px';
        // const alertDiv = document.createElement('p');
        // alertDiv.innerHTML = '~YOU CANNOT MAKE THIS PURCHASE~';
        // alertDiv.style.marginTop = '-10px';
        // alertDiv.style.color = 'white';
        // blackboxHeaderSection.appendChild(alertDiv);
        // document.getElementById('budget-input-section').style.marginTop = '0px';
    };

    purchaseDescription.value = ''; //clears the value after Submit
    purchasePrice.value = ''; //clears the value after Submit

});


// purchaseUpdater() function is called when addButton is clicked
const purchaseUpdater = (itemPrice) => { //function takes in price of item and changes the budget to reflect purchase
    amountSpent.innerHTML = parseInt(amountSpent.innerHTML) + parseInt(itemPrice); //updates amountSpent
    balance.innerHTML -= itemPrice; //updates budget 
};



// the spend breakdown section at the bottom of the page
const spendBreakdownButton = document.getElementById('spendBreakdownButton');
spendBreakdownButton.addEventListener('click', () => {
    console.log('breakdown button pushed');
    // redraw the breakdown piechart
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        let data = google.visualization.arrayToDataTable([
            ['Purchase Type', 'Dollars Spent'],
            ['Entertainment', entertainmentSpentCounter],
            ['Food', foodSpentCounter],
            ['Clothing', clothingSpentCounter],
            ['Bills', billsSpentCounter]
        ]);

        const options = {
            title: 'Monthly Spend Breakdown',
            backgroundColor: 'red'
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    };
});

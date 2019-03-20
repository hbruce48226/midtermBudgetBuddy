
function updateTotalIncome() {
  const myIn = parseInt(document.getElementById("my-Income").value);
  const otherIn = parseInt(document.getElementById("other-Income").value);
  const totalIncome =   document.getElementById('tInc').value = myIn + otherIn;

if(totalIncome <= 0){

  // alert("You cannot make any additional purchases!");
  const stopPurchase = document.createElement('p');
  stopPurchase.innerHTML = '<p>Sorry, you cannot make any additional purchases!</p>';
  
  document.body.appendChild(stopPurchase);
  // setTimeout(function() {
  //   stopPurchase.innerHTML.remove('<p>Sorry, you cannot make any additional purchases!</p>')
  // }, 3000);

  } else {
  document.getElementById('tInc').innerHTML = '$' + totalIncome;
  document.getElementById('total-Income').placeholder= '$' + totalIncome;

  }
}

  function updateTotalExpenses() {
    const funExpense = parseInt(document.getElementById("fun-Expense").value);
    const foodExpense = parseInt(document.getElementById("food-Expense").value);
    const clotheExpense = parseInt(document.getElementById("clothe-Expense").value);
    const billExpense = parseInt(document.getElementById("bill-Expense").value);
    const totalExpense = document.getElementById('tExp').value = funExpense + foodExpense + clotheExpense + billExpense;
  
    // document.getElementById('tInc').value = myIn + otherIn;
    document.getElementById('tExp').innerHTML = '$' + totalExpense;
    
    // document.getElementById('total-Income').innerHTML = totalIncome;
    document.getElementById('total-Expenses').placeholder= '$' + totalExpense;
   }
     
const budgetList = document.querySelector('.budget-list');

class BudgetLedger{

    constructor(categorys) {
        this.categorys = categorys;
      } 

  print() {
    for (const category of this.categorys) {
      console.log(category);
    }
}

  display() {
//maybe use for adding additional
    budgetList.innerHTML = '';
    for (let i = 0; i < this.categorys.length; i++) {
      category = this.categorys[i];
      const div = document.createElement('div');

      div.innerHTML = `
        <p>Your Income: ${category.yrInc}</p>
        <p>Other Income: ${category.othInc}</p>
        <p>Total Income: ${category.totInc}</p>
      `;

    budgetList.appendChild(div);

      const add = document.createElement('p');
      icon.className = 'blue far fa-trash-alt';
      icon.addEventListener('click', () => {
        const index = Array.from(contactList.children).indexOf(div);
        this.deleteAt(index);
        this.display();
      });
      div.appendChild(icon);
      contactList.appendChild(div);
    }
} 


  add(category) {
    this.categorys.push(category);
  }

  deleteAt(index) {
    this.categorys.splice(index, 1);
  }
}

// Class Category includes your weekly income, spouse's 
// weekly income, other weekyly income and total income
class Category {
    constructor(yrInc, othInc, totInc) {
      this.yrInc = yrInc;
      this.othInc = othInc;
      this.totInc = totInc;
    }
  }

// const ledger = new BudgetLedger([
//     new Category(90000, 90000, 35000),
//     new Category(100000, 100000, 70000)
//   ]);

ledger.display();


function updateBalance() {
  const totalIncome = parseInt(document.getElementById('total-Income').value);
  const totalExpense = parseInt(document.getElementById('total-Expenses').value);
  const balanceAmount =  document.getElementById('balance').value = totalIncome - totalExpense;
 
  document.getElementById('balance').innerHTML = '$ -' + balanceAmount;
  document.getElementById('balAmt').innerHTML = '$' + balanceAmount;
}

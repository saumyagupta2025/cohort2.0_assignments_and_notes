/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// i/p {chips, food 50, diuhd}, {kinderjoy, food, 38790, jkdsh}, {Number, book, 89}

function calculateTotalSpentByCategory(transactions) {
  let output = [];

  for (let i = 0; i < transactions.length; i++) {
    let currentTransaction = transactions[i];
    let found = output.find(
      (transaction) =>
        transaction["category"] === currentTransaction["category"]
    );
    if (found) {
      found["totalSpent"] = found["totalSpent"] + currentTransaction["price"];
    } else {
      output.push({
        category: currentTransaction["category"],
        totalSpent: currentTransaction["price"],
      });
    }
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;

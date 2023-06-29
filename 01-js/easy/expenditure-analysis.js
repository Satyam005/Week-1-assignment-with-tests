/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions);
  const result = Object.values(
    transactions.reduce((acc, { category, price }) => {
      acc[category] = acc[category] || { category, totalSpent: 0 };
      acc[category].totalSpent += price;
      return acc;
    }, {})
  );
  return result;
}

module.exports = calculateTotalSpentByCategory;

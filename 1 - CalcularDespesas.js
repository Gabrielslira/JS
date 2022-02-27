let money = {
  incomes: [1000, 200],
  expenses: [600, 240, 180]
}

let totalIncomesandExpenses = sumArray(money.incomes) - sumArray(money.expenses)

if (totalIncomesandExpenses >= 0) {
  console.log(`Seu saldo está positivo e é de: R$ ${totalIncomesandExpenses}`)
} else {
  console.log(`Seu saldo está negativo e é de: R$ ${totalIncomesandExpenses}`)
}

function sumArray(array) {
  let total = 0
  for(let value of array) {
      total += value
  }
  return total
}
"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root];
  }

  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  let loanBody = amount - contribution;
  let monthlyPercent = percent / 100 / 12;

  let monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  let total = monthlyPayment * countMonths;

  return Math.round(total * 100) / 100;
}
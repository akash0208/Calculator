// export const calculateLoan = (loanAmount, interestRate, loanTerm) => {
//   const principal = parseFloat(loanAmount);
//   const rate = parseFloat(interestRate) / 100 / 12;
//   const term = parseFloat(loanTerm) * 12;

//   const monthlyPayment =
//     (principal * rate * Math.pow(1 + rate, term)) /
//     (Math.pow(1 + rate, term) - 1);
//   const totalPayment = monthlyPayment * term;
//   const totalInterest = totalPayment - principal;

//   return [
//     monthlyPayment.toFixed(2),
//     totalInterest.toFixed(2),
//     totalPayment.toFixed(2),
//   ];
// };

// export const calculateLoan = (loanAmount, interestRate, loanTerm) => {
//   const principal = parseFloat(loanAmount);
//   const rate = parseFloat(interestRate) / 100 / 12;
//   const term = parseFloat(loanTerm) * 12;

//   let monthlyPayment, totalInterest, totalAmount;
//   let principalList = [];
//   let interestList = [];

//   if (term <= 24) {
//     // Calculate per month principal and interest for term less than or equal to 2 years
//     monthlyPayment = (principal + principal * rate * term) / term;
//     totalInterest = principal * rate * term;
//     totalAmount = principal + totalInterest;

//     for (let i = 0; i < term; i++) {
//       principalList.push((principal / term).toFixed(2));
//       interestList.push((principal * rate).toFixed(2));
//     }
//   } else {
//     // Calculate per year principal and interest for term greater than or equal to 2 years
//     monthlyPayment =
//       (principal * rate * Math.pow(1 + rate, term)) /
//       (Math.pow(1 + rate, term) - 1);
//     totalInterest = monthlyPayment * term - principal;
//     totalAmount = principal + totalInterest;

//     for (let i = 0; i < term; i++) {
//       principalList.push(
//         (principal * rate * Math.pow(1 + rate, i)) /
//           (Math.pow(1 + rate, term) - 1).toFixed(2)
//       );
//       interestList.push(
//         (
//           monthlyPayment -
//           (principal * rate * Math.pow(1 + rate, i)) /
//             (Math.pow(1 + rate, term) - 1)
//         ).toFixed(2)
//       );
//     }
//   }

//   return [
//     monthlyPayment.toFixed(2),
//     totalInterest.toFixed(2),
//     totalPayment.toFixed(2),
//     principalList,
//     interestList,
//   ];
//   // setMonthlyPayment(monthlyPayment.toFixed(2));
//   // setTotalInterest(totalInterest.toFixed(2));
//   // setTotalAmount(totalAmount.toFixed(2));
//   // setPrincipalList(principalList);
//   // setInterestList(interestList);
// };

export function calculateLoan(loanAmount, interestRate, loanTenure) {
  // Convert interest rate to decimal
  interestRate = interestRate / 100;

  // Calculate monthly interest rate
  var monthlyInterestRate = interestRate / 12;

  // Calculate number of months
  var numberOfMonths = loanTenure * 12;

  // Calculate monthly payment
  var monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  var principalList = [];
  var interestList = [];
  var balanceList = [];

  var balance = loanAmount;

  for (var i = 0; i < numberOfMonths; i++) {
    // Calculate interest for the current month
    var interest = balance * monthlyInterestRate;

    // Calculate principal for the current month
    var principal = monthlyPayment - interest;

    // Check if remaining balance will become negative
    if (balance - principal < 0) {
      principal = balance; // Set principal to remaining balance
      balance = 0; // Set balance to zero
    } else {
      balance -= principal; // Update the remaining balance
    }

    // Add principal, interest, and balance to the respective lists
    principalList.push(Math.round(principal.toFixed(2)));
    interestList.push(Math.round(interest.toFixed(2)));
    balanceList.push(Math.round(balance.toFixed(2)));
  }

  return [
    monthlyPayment.toFixed(2),
    (monthlyPayment * numberOfMonths - loanAmount).toFixed(2),
    (monthlyPayment * numberOfMonths).toFixed(2),
    principalList,
    interestList,
    balanceList,
  ];
}

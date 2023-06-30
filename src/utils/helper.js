export const numberWithCommas = (number) => {
  return parseInt(number).toLocaleString("en-IN");
};

export const undoCommas = (formattedNumber) => {
  return parseFloat(formattedNumber.replace(/,/g, ''));
};
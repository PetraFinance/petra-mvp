export const convertNumbertoDollars = (value) => {
  let dollars = '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString();
  if (dollars.split(".")[1] === "00") {
    return dollars.split(".")[0];
  }
  return dollars;
};

export const convertDollarstoNumbers = (value) => {
  value = value.replace(',', '');
  return parseInt(value.slice(1, value.length));
};

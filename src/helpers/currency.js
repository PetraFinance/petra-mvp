export const IntToMonetaryStr = (value) => {
  let dollars = '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString();
  if (dollars.split(".")[1] === "00") {
    return dollars.split(".")[0];
  }
  return dollars;
};

export const MonetaryStrToInt = (value) => {
  let clean = value.replace(',', '').replace('$', '');
  return parseInt(clean);
};

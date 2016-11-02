/*
@value, string
Converts a string to a monetary representation of the string.
e.g. "50032" => "$50,032"
*/
export const ToMonetaryStr = (value) => {
  const monetary = '$' + value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString();
  return monetary;
}

/*
@value, string
Converts a monetary string to a simple string.
e.g. "$50,032" => "50032"
*/
export const StripMonetaryStr = (value) => {
  const clean = value.replace(',', '').replace('$', '');
  return clean;
};


/*
@value, any value
Checks that a user has entered a numerical value.
*/
export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/*
@value, string
Converts a string to a monetary representation of the string.
e.g. "50032" => "$50,032"
*/
export const ToMonetaryStr = (value) => {
  let monetary = String(Number(value).toFixed(2)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  const template = `\$${monetary}`;
  return template;
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

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

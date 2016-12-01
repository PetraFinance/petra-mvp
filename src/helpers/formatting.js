const monthMap = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sept',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

const ignoreString = [
  'ID',
  'ATM',
]

export const formatDate = (date) => {
  const segments = date.split('-');
  const year = segments[0];
  const month = monthMap[segments[1]];
  let day = segments[2];
  if (day[0] === "0") {
    day = day.slice(1);
  }
  return `${month} ${day}, ${year}`;
};

export const formatTransaction = (transaction) => {
  let clean = [];
  const pieces = transaction.split(" ");
  if (pieces.length < 2) {
    return transaction;
  }
  for (let piece of pieces) {
    if (ignoreString.includes(piece)) {
      continue;
    }
    if (isLetter(piece[0])) {
      piece = piece.toLowerCase();
      piece = capitalizeFirstLetter(piece);
    }
    clean.push(piece);
  }
  return clean.join(' ');
}

const isLetter = (str) => {
  return str.match(/[a-z]/i);
}

/*
@value, any value
Capitalizes the first letter heh.
*/
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/*
@value, string
Converts a string to a monetary representation of the string.
Take in a value "negation" which defaults to false on whether or not to
reverse the sign of monetary values.
e.g. "50032" => "$50,032"
*/
export const ToMonetaryStr = (value, negation = false) => {
  let monetary = String(Number(value).toFixed(2)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  if (negation) {
    monetary = negateMonetary(monetary);
  } else {
    monetary = '$' + monetary;
  }
  return monetary;
};

const negateMonetary = (value) => {
  if (value.includes('-')) {
   return  value = value.replace('-', '$');
  } else {
    return value = '-$' + value;
  }
};

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
};

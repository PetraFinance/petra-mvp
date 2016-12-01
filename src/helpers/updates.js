// Generate updates for users through parsing their transaction data.
export const genUpdates = (transactionsList) => {
  let updates = [];
  const frequent = computeFrequency(transactionsList);
  for (const name of Object.keys(frequent)) {
    const count = frequent[name];
    const phrase = "Hey, we noticed that you visited " + name + " about " + frequent[name] + " times in the last month. " +
    "You spend about $4.50 each time you go, are there any alternatives?"
    updates.push(phrase);
  }
  return updates;
}

// https://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
function standardDeviation(values){
  var avg = average(values);
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  var avgSquareDiff = average(squareDiffs);
  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data) {
  var sum = data.reduce( function(sum, value) {
    return sum + value;
  }, 0);
  var avg = sum / data.length;
  return avg;
}

// https://gist.github.com/caseyjustus/1166258
function median(values) {
  values.sort( function(a,b) { return a - b; });
  var half = Math.floor(values.length/2);
  if (values.length % 2)
    return values[half];
  else
    return (values[half-1] + values[half]) / 2.0;
}

// time = number of days * 1000 * 3600 * 24
const computeFrequency = (transactionsList) => {

  const threeWeeks = 2592000000;
  const time = new Date(Date.now()).getTime();
  const cutoff = new Date(time - threeWeeks);

  console.log(threeWeeks);
  console.log(time);
  console.log(cutoff);

  transactionsList = transactionsList.filter( transaction => (new Date(transaction.date) > cutoff));

  let items = {};
  for (const item of transactionsList) {
    const name = item.name;
    const category = item.category;
    if (category && !category.includes('Food and Drink')) {
      continue;
    }
    if (Object.keys(items).includes(name)) {
      items[name]++;
    } else {
      items[name] = 1;
    }
  }

  let rawCounts = [];
  for (const name of Object.keys(items)) {
    rawCounts.push(items[name]);
  }

  const stdDev = standardDeviation(rawCounts);
  const median = average(rawCounts);
  const limit = median + stdDev * 2;
  console.log(transactionsList);
  console.log(limit);
  console.log(items);
  console.log("FUG");

  const frequent = [];
  for (const item of Object.keys(items)) {
    const count = items[item];
    if (count < limit) {
      delete items[item];
    }
  }
  return items;
}

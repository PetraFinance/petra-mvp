const fundsIcon = require('../../../assets/navigation/funds.png');
const fundsIconActive = require('../../../assets/navigation/fundsActive.png');

const learnIcon = require('../../../assets/navigation/learn.png');
const learnIconActive = require('../../../assets/navigation/learnActive.png');

const overviewIcon = require('../../../assets/navigation/overview.png');
const overviewIconActive = require('../../../assets/navigation/overviewActive.png');

const transactionsIcon = require('../../../assets/navigation/transactions.png');
const transactionsIconActive = require('../../../assets/navigation/transactionsActive.png');

const settingsIcon = require('../../../assets/navigation/settings.png');
const settingsIconActive = require('../../../assets/navigation/settingsActive.png');

const routingStates = {
  'transactions': [
    transactionsIconActive,
    fundsIcon,
    overviewIcon,
    learnIcon,
    settingsIcon,
  ],
  'funds': [
    transactionsIcon,
    fundsIconActive,
    overviewIcon,
    learnIcon,
    settingsIcon,
  ],
  'overview': [
    transactionsIcon,
    fundsIcon,
    overviewIconActive,
    learnIcon,
    settingsIcon,
  ],
  'learn': [
    transactionsIcon,
    fundsIcon,
    overviewIcon,
    learnIconActive,
    settingsIcon,
  ],
  'settings': [
    transactionsIcon,
    fundsIcon,
    overviewIcon,
    learnIcon,
    settingsIconActive,
  ],
}

export default routingStates;

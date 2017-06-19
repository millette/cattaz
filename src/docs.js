const files = [
  'apps',
  'app-date',
  'app-datematcher',
  'app-helpful',
  'app-kpt',
  'app-mandala',
  'app-meetingtime',
  'app-reversi',
  'app-vote',
  'app-votecrypto',
  'app-weather',
  'app-map',
  'app-draw',
];

const docs = {
};

files.forEach((f) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  docs[f] = require(`../docs/${f}.cattaz.md`);
});

export default docs;

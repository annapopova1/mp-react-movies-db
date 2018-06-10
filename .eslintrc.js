module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {
    "shallow": true,
    "mount": true,
    "render": true
  },
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}]
  }
};

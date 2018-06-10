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
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }],
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1
  }
};

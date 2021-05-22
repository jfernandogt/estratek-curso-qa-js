const scopes = ["core", "pipeline"];

// types
/*
const types = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
*/

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", Infinity],
    "scope-enum": [2, "always", scopes],
    "subject-case": [2, "always", "sentence-case"],
  },
};

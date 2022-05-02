module.exports = {
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};

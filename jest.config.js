module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
    },
  },

  // testPathIgnorePatterns: ["/src/App.tsx", "/src/index.tsx"],
  // coveragePathIgnorePatterns: ["src/App.tsx", "src/index.tsx"],
};

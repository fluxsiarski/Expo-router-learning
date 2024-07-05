const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Disable CSS support.
  isCSSEnabled: true,
});

module.exports = config;

const { i18n } = require("next-i18next/config");

module.exports = {
  ...i18n,
  locales: ["en", "tr"],
  defaultLocale: "tr",
};

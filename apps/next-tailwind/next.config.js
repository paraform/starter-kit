const withTM = require("next-transpile-modules")(["ui", "ds-tailwind"]);

module.exports = withTM({
  reactStrictMode: true,
});

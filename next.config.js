
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['8yJUawVLVZ2Kprt4nYoNMH'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
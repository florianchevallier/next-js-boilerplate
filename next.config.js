const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

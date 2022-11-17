/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@stadtteilliebe/react-cookie-consent"])

const nextConfig = withTM({
    reactStrictMode: true,
    swcMinify: true,
})

module.exports = nextConfig

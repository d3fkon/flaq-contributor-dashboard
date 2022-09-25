/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    dev_base_url: process.env.DEV_API_BASE_URL,
    prod_base_url: process.env.PROD_API_BASE_URL,
    dev_discord_url: process.env.DEV_DISCORD_PUBLIC_URL,
    prod_discord_url: process.env.PROD_DISCORD_PUBLIC_URL,
  }
}

module.exports = nextConfig

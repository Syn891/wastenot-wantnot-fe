/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    tomtomKey: 'VNXLbtBj2rKw0C10r8BxYCHVAPWYKo3q',
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')
 
module.exports = withVideos()
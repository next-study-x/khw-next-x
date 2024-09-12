/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
     
    });

    return config;
  },
};


export default nextConfig;

/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  //reactStrictMode: true, 
  reactStrictMode: false, //개발 모드일 경우 useEffect가 두번 실행되는 것 방지
  swcMinify: true,
}

module.exports = nextConfig
*/
///*
const path = require("path");

const nextConfig = {
  //reactStrictMode: true, 
  reactStrictMode: false, //개발 모드일 경우 useEffect가 두번 실행되는 것 방지
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
}

module.exports = nextConfig
//*/

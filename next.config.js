// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const repo = "ic-foods-website";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages serves your site under /ic-foods-website/
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // Helps GitHub Pages resolve routes as folders (e.g. /about/ -> out/about/index.html)
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

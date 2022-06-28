/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts")

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/3',
        permanent: false,
      },
    ]
  },
  images: {
    domains: [ `res.cloudinary.com` ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
}



module.exports = nextConfig, withFonts({
  webpack(config, options) {
      config.node = {
          fs: "empty",
      };
      config.module.rules.push({
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: [
              options.defaultLoaders.babel,
              {
                  loader: "url-loader?limit=100000",
              },
              {
                  loader: "file-loader",
              },
          ],
      });
      return config;
  },
});

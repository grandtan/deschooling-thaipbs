const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'res.cloudinary.com',
      'images-cdn.enveu.com',
      'cf-images.ap-southeast-1.prod.boltdns.net',
      's3.ap-southeast-1.amazonaws.com', 
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/demo/image/upload/',
  },
  output: 'export',
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: [
        {
          loader: 'import-glob-keyed'
        },
      ],
    })

    return config
  },
}
// webpack.config.js

const path = require('path');

module.exports = {
  // Other webpack configurations...

  module: {
    rules: [
      // Other rules...

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // The output directory for images
            },
          },
        ],
      },
    ],
  },
};

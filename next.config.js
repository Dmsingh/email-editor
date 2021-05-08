module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    },
    api: {
      bodyParser: {
        sizeLimit: '2MB',
      },
    },
    // future: {
    //       webpack5: true,
    //     },
      }


  // module.exports = {
  //   future: {
  //     webpack5: true,
  //   },
  // }
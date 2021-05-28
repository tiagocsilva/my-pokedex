module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/_colors.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const newArgs = args;
        newArgs[0].title = 'My Pokédex';
        return newArgs;
      });
  },
  transpileDependencies: [
    'epic-spinners',
  ],
};

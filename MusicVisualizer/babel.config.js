module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      'module:react-native-dotenv',
      {
        path: '.env', 
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime:"automatic"}]
        //this pretest helps testing library to understand jsx and convert it to html.
    ],
  }; 
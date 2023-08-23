module.exports = config => {
  // Set dirs to pass through to the dist folder
  config.addPassthroughCopy('./src/images');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
}





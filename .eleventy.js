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

// Build Work

exports.render = function(data) {
  return `<ul>
    ${data.collections.work.map(work => `<li>${work.data.title}</li>`).join("\n")}
  </ul>`;
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("work", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob("./src/work/*.md");
  });
};
  


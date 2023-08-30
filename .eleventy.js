module.exports = config => {
  // Set dirs to pass through to the dist folder
  config.addPassthroughCopy('./src/images');
  // Returns work items, sorted by display order

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
    ${data.collections.work.map(post => `<li>${post.data.title}</li>`).join("\n")}
  </ul>`;
};

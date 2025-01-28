const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Add the navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("CNAME");
    // Create a collection for documentation pages
    eleventyConfig.addCollection("docs", function(collectionApi) {
        return collectionApi.getFilteredByGlob("docs/**/*.md");
    });

    // Add YouTube shortcode
    eleventyConfig.addShortcode("youtube", function(id, title) {
        return `<div class="video-embed">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/${id}?rel=0" 
            title="${title}"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowfullscreen>
          </iframe>
        </div>`;
    });

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes"
        }
    };
};
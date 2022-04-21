/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for news article
  const newsArticle = path.resolve('./src/templates/news-article.js');

  const result = await graphql(
    `
      {
        allContentfulNewsArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulNewsArticle.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug;

      createPage({
        path: `/news/${post.slug}/`,
        component: newsArticle,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }
};

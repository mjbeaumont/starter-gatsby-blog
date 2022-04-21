import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Seo from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ArticlePreview from '../components/article-preview';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulNewsArticle.nodes');

    return (
      <Layout location={this.props.location}>
        <Seo title="News" />
        <Hero title="News" />
        <ArticlePreview posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulNewsArticle(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import Hero from '../components/hero';
import { ShortHistory } from '../components/short-history.tsx';
import ArticlePreview from '../components/article-preview';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulNewsArticle.nodes');
    const page = get(this, 'props.data.contentfulHomePage');
    const history = get(this, 'props.data.contentfulOurHistory');

    return (
      <Layout location={this.props.location}>
        <Hero
          image={page.heroImage.gatsbyImageData}
          title={page.heroTitle}
          subtitle={page.heroSubtitle}
          ctaText={page.ctaText}
        />
        <ShortHistory history={history} />
        <ArticlePreview posts={posts} />
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
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
    contentfulHomePage {
      heroTitle
      heroSubtitle
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      ctaText
    }
    contentfulOurHistory {
      heroCaption
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 212
        )
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

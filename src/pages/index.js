import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import Hero from '../components/hero';
import { ShortHistory } from '../components/short-history.tsx';
import ArticlePreview from '../components/article-preview';
import { Events } from '../components/events';
import { ContactForm } from '../components/contact-form';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulNewsArticle.nodes');
    const assets = get(this, 'props.data.allContentfulAsset.nodes');
    const page = get(this, 'props.data.contentfulHomePage');

    return (
      <Layout location={this.props.location}>
        <Hero
          image={page.heroImage.gatsbyImageData}
          title={page.heroTitle}
          subtitle={page.heroSubtitle}
          ctaText={page.ctaText}
        />
        <ShortHistory assets={assets} welcomeMessage={page.welcomeMessage} />
        <Events />
        <ContactForm />
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
    allContentfulAsset {
      nodes {
        contentful_id
        file {
          url
        }
      }
    }
    contentfulHomePage {
      heroTitle
      heroSubtitle
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      welcomeMessage {
        raw
      }
    }
  }
`;

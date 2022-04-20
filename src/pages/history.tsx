import React from 'react';
import { graphql, PageProps } from 'gatsby';
import get from 'lodash/get';

import Seo from '../components/seo';
import Layout from '../components/layout';

import { FullHistory } from '../components/full-history';

class HistoryIndex extends React.Component<PageProps> {
  render() {
    const page = get(this, 'props.data.contentfulOurHistory');

    return (
      <Layout location={this.props.location}>
        <Seo title="Our History" />
        <FullHistory page={page} />
      </Layout>
    );
  }
}

export default HistoryIndex;

export type HistoryPageData = typeof pageQuery;

export const pageQuery = graphql`
  query HistoryIndexQuery {
    contentfulOurHistory {
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 212
        )
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

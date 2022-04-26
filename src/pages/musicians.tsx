import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';

import type { PageProps } from 'gatsby';

import { FullRoster } from '../components/full-roster';
import { sections } from '../data/roster';

class MusiciansIndex extends React.Component<PageProps> {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Musician Roster" />
        <FullRoster sections={sections} />
      </Layout>
    );
  }
}

export default MusiciansIndex;

import * as React from 'react';

import Container from '../components/container';
import * as styles from './short-history.module.css';

import { SectionHeading } from '../components/section-heading';
import { HOME_MESSAGE_ID } from '../constants';

import {
  renderRichText,
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from 'gatsby-source-contentful/rich-text';

import { INLINES } from '@contentful/rich-text-types';
import type {
  RenderNode,
  NodeRenderer,
} from '@contentful/rich-text-react-renderer';

import { OutboundLink } from 'gatsby-plugin-google-gtag';

interface Asset {
  contentful_id: string;
  file: {
    url: string;
  };
}

interface ShortHistoryProps {
  welcomeMessage: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  assets: Asset[];
}

interface RenderNodeOptions {
  renderNode: RenderNode;
}

interface GetAssetUriByIdArgs {
  node: Parameters<NodeRenderer>[0];
  assets: Asset[];
}

const getAssetUriById = ({ node, assets }: GetAssetUriByIdArgs) => {
  return assets.find((asset) => asset.contentful_id === node.data.target.sys.id)
    ?.file.url;
};

export const ShortHistory = ({ welcomeMessage, assets }: ShortHistoryProps) => {
  const options: RenderNodeOptions = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const uri = getAssetUriById({ node, assets });
        return <a href={uri}>{children}</a>;
      },
    },
  };

  return (
    <section className={styles.container} id={HOME_MESSAGE_ID}>
      <Container>
        <SectionHeading className={styles.heading}>Welcome</SectionHeading>
        {renderRichText(welcomeMessage, options)}
        <p>
          <strong>Write to:</strong>
        </p>
        <ul>
          <li>
            <strong>Bardavon Executive Director, Chris Silva:</strong>{' '}
            <OutboundLink href="mailto:csilva@bardavon.org">
              csilva@bardavon.org
            </OutboundLink>
          </li>
          <li>
            <strong>Bardavon Administrative Offices:</strong>{' '}
            <OutboundLink href="tel:1-845-473-5288">
              (845) 473-5288
            </OutboundLink>{' '}
          </li>
          <li>
            <strong>Bardavon Board of Directors:</strong>{' '}
            <OutboundLink
              href="https://www.bardavon.org/about-us/board-of-directors"
              target="_blank"
              rel="noreferrer"
            >
              www.bardavon.org/about-us/board-of-directors/
            </OutboundLink>
          </li>
        </ul>
      </Container>
    </section>
  );
};

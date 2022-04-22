import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from './container';
import Tags from './tags';
import * as styles from './article-preview.module.css';

import { SectionHeading } from '../components/section-heading';

const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <Container>
      <SectionHeading>News Archives</SectionHeading>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/news/${post.slug}`} className={styles.link}>
                {post.heroImage && (
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                )}
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
              <div className={styles.readMore}>
                <Link to={`/news/${post.slug}`}>Read more &raquo;</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ArticlePreview;

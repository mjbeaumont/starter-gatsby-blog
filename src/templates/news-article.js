import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { ArticleImage } from '../components/article-image';
import Tags from '../components/tags';
import * as styles from './news-article.module.css';

class NewsArticleTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulNewsArticle');
    const previous = get(this.props, 'data.previous');
    const next = get(this.props, 'data.next');

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={`http:${post.heroImage?.resize.src}`}
        />
        {post.heroImage && (
          <ArticleImage
            image={post.heroImage?.gatsbyImageData}
            alt={post.title}
          />
        )}
        <div className={styles.container}>
          <div className={styles.article}>
            <h1 className={styles.pageHeading}>{post.title}</h1>
            <span className={styles.meta}>
              {post.author} &middot;{' '}
              <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
              {post.body?.childMarkdownRemark?.timeToRead} minute read
            </span>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/news/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/news/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default NewsArticleTemplate;

export const pageQuery = graphql`
  query NewsArticleBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulNewsArticle(slug: { eq: $slug }) {
      slug
      title
      author
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulNewsArticle(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulNewsArticle(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`;

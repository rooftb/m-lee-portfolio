import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <main>
        <h2>Test</h2>
      </main>
      <aside>test2</aside>
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/index';
import { HomeIcon } from '../components/icons';
import { Title, Article as ArticleBase } from '../components/elements';

const Article = styled(ArticleBase)`
  text-align: left;
`;

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="React Static Base" className="centered">
        <HomeIcon className="fa-4x" />
        <Title>React Static Base</Title>
        <Article>
          <p>This is a small template application that I designed to as a starter template for my own projects. You can find the source for it <a href="https://github.com/dbtlr/react-static-base">on Github</a> and if you find it helpful, I&apos;d <a href="mailto:hi@dbtlr.com">love to know</a>.</p>
        </Article>
      </Layout>
    );
  }
}

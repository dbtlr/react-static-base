import React, { Component } from 'react';
import Layout from '../components/Layout/index';
import { HomeIcon } from '../components/icons';
import { Title } from '../components/elements';

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="React Static Site" className="centered">
        <HomeIcon className="fa-4x" />
        <Title>Homepage</Title>
      </Layout>
    );
  }
}

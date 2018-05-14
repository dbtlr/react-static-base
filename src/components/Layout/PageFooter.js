import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  
  p {
    margin: 0;
  }
`;

export default class PageFooter extends Component {
  render() {
    return (
      <Footer className="page-footer">
        <p>
          Made with <span role="img" aria-label="love">❤️</span> by <a href="https://dbtlr.com" title="Drew Butler">Drew Butler</a>
        </p>
      </Footer>
    );
  }
}

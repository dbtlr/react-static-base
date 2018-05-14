
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import {
  faHome,
  faBlind,
  faBars,
} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faHome);
fontawesome.library.add(faBlind);
fontawesome.library.add(faBars);

const BaseIcon = styled.span.attrs({ className: 'icon' })``;

const buildIcon = iconClass => class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <BaseIcon>
        <i className={`${iconClass} ${this.props.className}`} />
      </BaseIcon>
    );
  }
};

const HomeIcon = buildIcon('fas fa-home');
const BlindIcon = buildIcon('fas fa-blind');
const BarsIcon = buildIcon('fas fa-bars');

export {
  HomeIcon,
  BlindIcon,
  BarsIcon,
};

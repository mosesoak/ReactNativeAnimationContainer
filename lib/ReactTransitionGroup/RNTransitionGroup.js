// @flow weak
import React, { PropTypes } from 'react';

import View from 'constelation-View';

import TransitionGroup from './TransitionGroup';

export default class RNTransitionGroup extends React.Component {
  // static propTypes = {
  //   ...TransitionGroup.propTypes,
  // };
  //
  // static defaultProps = {
  //   ...TransitionGroup.defaultProps,
  // };

  render() {
    return (
      <TransitionGroup component={View}>
        {this.props.children}
      </TransitionGroup>
    );
  }
}

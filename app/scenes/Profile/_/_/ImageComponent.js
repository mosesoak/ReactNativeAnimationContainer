// @flow weak
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

export default class ImageComponent extends React.Component {
  static propTypes = {
    instrumentLogoAnimationStyle: PropTypes.any,
  };

  render() {
    console.log("ImageComponent render")
    return (
      <Animated.Image
        key='instrumentLogo'
        style={[
          {
            width: 100,
            height: 100,
            margin: 20,
          },
          this.props.instrumentLogoAnimationStyle,
        ]}
        source={require('images/Instrument-logo.png')}
      />
    );
  }
}

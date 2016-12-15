// @flow weak
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

import View from 'constelation-View';

import ButtonComponent from './_/ButtonComponent';
import ImageComponent from './_/ImageComponent';

// This content class receives its animations from above, like manna from heaven

export default class Content extends React.Component {
  static propTypes = {
    starsLogoAnimationStyle: PropTypes.any,
    starsCaptionAnimationStyle: PropTypes.any,
  };

  render() {
    console.log("Child render")
    return (
      <View
        flexGrow={1}
        align='center'
        justify='center'
      >

        <Animated.Image
          // this piece of content lives in this class
          key='starsLogo'
          style={[
            {
              width: 100,
              height: 100,
            },
            this.props.starsLogoAnimationStyle,
          ]}
          source={require('images/logo.png')}
        />

        <Animated.Text
          // this piece of content lives in this class
          color='black'
          style={[{padding: 20}, this.props.starsCaptionAnimationStyle]}
        >
          Some Animated Text
        </Animated.Text>

        <ImageComponent
          // this piece of content is a subcomponent
          instrumentLogoAnimationStyle={this.props.instrumentLogoAnimationStyle}
        />

        <ButtonComponent
          // this piece of content is a subcomponent
          buttonAnimationStyle={this.props.buttonAnimationStyle}
          onPress={this.props.startOutro}
        />

      </View>
    );
  }
}

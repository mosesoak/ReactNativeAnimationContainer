// @flow weak
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

import View from 'constelation-View';
import Style_ from 'constelation-Style_';
import Animated_ from 'lib/AnimationContainer/Animated_'

import ButtonComponent from './_/ButtonComponent';
import ImageComponent from './_/ImageComponent';

const AnimatedView = Animated.createAnimatedComponent(View)

// This content class receives its animations from above, like manna from heaven

export default class Content extends React.Component {
  static propTypes = {
    starsLogoAnimationStyle: PropTypes.any,
    starsCaptionAnimationStyle: PropTypes.any,
  };

  render() {
    return (
      <View
        flexGrow={1}
        align='center'
        justify='center'
        >

        {/* These pieces of content live in this class */}

        <Animated_ animationKey='starsLogo'>
          <Animated.Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require('images/logo.png')}
            />
        </Animated_>

        <Animated_ animationKey='redRectangleView'>
          <Style_
            backgroundColor='red'
            >
            <AnimatedView
              width={200}
              height={25}
              />
          </Style_>
        </Animated_>

        <Animated_ animationKey='starsCaption'>
          <Animated.Text
            color='black'
            style={{padding: 20}}
            >
            This example keeps animations in a container.
          </Animated.Text>
        </Animated_>

        {/* These pieces of content are subcomponents, each declares its own animationKey */}

        <ImageComponent />

        <ButtonComponent onPress={this.props.startOutro} />
        
      </View>
    );
  }
}

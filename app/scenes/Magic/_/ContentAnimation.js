// @flow weak
import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

import View from 'constelation-View'

import Content from './Content'

import { animatedStylesByKey } from 'lib/AnimationContainer/Animated_'

// Animation wrapper around Content

// @animationContainer –– coming soon, hopefully...
export default class ContentAnimation extends React.Component {
  static childContextTypes = {
    [animatedStylesByKey]: PropTypes.object,
  }

  getChildContext = () => {
    return {
      [animatedStylesByKey]: {
        'starsLogo': this.starsLogoAnimationStyle,
        'redRectangleView': this.starsLogoAnimationStyle,
        'starsCaption': this.starsCaptionAnimationStyle,
        'instrumentLogo': this.instrumentLogoAnimationStyle,
        'button': this.buttonAnimationStyle,
      },
    };
  }

  // raw values

  animVal = new Animated.Value(0.1)
  animVal2 = new Animated.Value(0)
  animVal3 = new Animated.Value(0)
  animVal4 = new Animated.Value(0)

  // interpolations

  animSlideVal = this.animVal3.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-400, 0, 400],
  })

  // injected styles

  starsLogoAnimationStyle = {
    opacity: this.animVal,
    transform: [{ scale: this.animVal }],
  }

  starsCaptionAnimationStyle = {
    opacity: this.animVal2,
  }

  instrumentLogoAnimationStyle = {
    opacity: this.animVal,
    transform: [{ translateX:this.animSlideVal }]
  }

  buttonAnimationStyle = {
    opacity: this.animVal4,
    transform: [{ scale: this.animVal4 }],
  }

  // triggers

  componentWillMount = () => {
    this.doIntro()
  }

  handleStartOutro = () => {
    this.doOutro()
  }

  // animations

  doIntro = () => {
    Animated.timing(this.animVal, {
      toValue: 1,
      easing: Easing.out(Easing.quad),
      duration: 400,
      delay: 400,
    }).start()

    Animated.timing(this.animVal2, {
      toValue: 1,
      easing: Easing.out(Easing.quad),
      duration: 300,
      delay: 300,
    }).start()

    Animated.timing(this.animVal3, {
      toValue: 1,
      easing: Easing.out(Easing.quad),
      duration: 300,
      delay: 300,
    }).start()

    Animated.sequence([
      Animated.delay(500),
      Animated.spring(this.animVal4, {
        toValue: 1,
        velocity: 4,
        tension: -2,
        friction: 3,
        useNativeDriver: true, // currently only supported for spring
      }),
    ]).start()
  }

  doOutro = () => {
    Animated.spring(this.animVal4, {
      toValue: 0,
      velocity: 4,
      tension: -2,
      friction: 3,
      useNativeDriver: true, // currently only supported for spring
    }).start()

    Animated.timing(this.animVal2, {
      toValue: 0,
      easing: Easing.in(Easing.quad),
      duration: 300,
      delay: 400,
    }).start()

    Animated.timing(this.animVal3, {
      toValue: 2,
      easing: Easing.in(Easing.quad),
      duration: 300,
      delay: 400,
    }).start()

    Animated.timing(this.animVal, {
      toValue: 0,
      easing: Easing.in(Easing.quad),
      duration: 400,
      delay: 600,
    }).start()
  }

  render() {
    return (
      <Content startOutro={this.handleStartOutro} />
    )
  }
}

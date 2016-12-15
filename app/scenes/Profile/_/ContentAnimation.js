// @flow weak
import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

/*
This can be used to check what's going over the bridge.
Animated hasn't been upgraded for useNativeDriver: true yet in most cases, so you'll see
lots of  "JS->N : UIManager.updateView(...)" calls in most cases.
Leaving this here so we can double-check that piping animation styles down to
subcomponents doesn't lead to additional inefficiency.

import MessageQueue from 'MessageQueue';
MessageQueue.spy(true);
*/

import View from 'constelation-View'

import Content from './Content'

// Animation wrapper around Content

export default class ContentAnimation extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
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
      duration: 1000,
      delay: 600,
    }).start()

    Animated.timing(this.animVal3, {
      toValue: 1,
      easing: Easing.out(Easing.quad),
      duration: 1000,
      delay: 600,
    }).start()

    Animated.sequence([
      Animated.delay(1500),
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
      duration: 1000,
      delay: 400,
    }).start()

    Animated.timing(this.animVal3, {
      toValue: 2,
      easing: Easing.in(Easing.quad),
      duration: 1000,
      delay: 400,
    }).start()

    Animated.timing(this.animVal, {
      toValue: 0,
      easing: Easing.in(Easing.quad),
      duration: 400,
      delay: 1200,
    }).start()
  }

  render() {
    console.log("Content render")
    for (let o in this) {
      if (this[o] instanceof Animated.Value)
      console.log(o)
    }
    return (
      <View
        flexGrow={1}
      >
      <Content
        starsLogoAnimationStyle={this.starsLogoAnimationStyle}
        starsCaptionAnimationStyle={this.starsCaptionAnimationStyle}
        instrumentLogoAnimationStyle={this.instrumentLogoAnimationStyle}
        buttonAnimationStyle={this.buttonAnimationStyle}
        startOutro={this.handleStartOutro}
        />
      </View>
    )
  }
}

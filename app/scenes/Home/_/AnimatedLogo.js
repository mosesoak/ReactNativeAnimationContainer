// @flow weak
import React, { PropTypes } from 'react'
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native'

import View from 'constelation-View'

export default class AnimatedLogo extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
  }

  static defaultProps = {
  }

  animVal = new Animated.Value(0)

  componentWillAppear = (callback) => {
    console.log("componentWillAppear")
    Animated.timing(this.animVal, {
      toValue: 1,
      easing: Easing.linear(),
      duration: 400,
      delay: 1000,
    }).start(callback)
  }

  componentDidAppear = () => {
    console.log("componentDidAppear")
  }

  componentWillLeave = (callback) => {
    console.log("componentDidAppear")
    Animated.timing(this.animVal, {
      toValue: 0,
      easing: Easing.linear(),
      duration: 400,
    }).start(callback)
  }

  componentDidLeave = () => {
    console.log("componentDidLeave")
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        >
        <Animated.Image
          style={[
            {
              width: 200,
              height: 200,
              opacity: this.animVal,
            },
          ]}
          source={require('images/logo.png')}
          />
      </TouchableWithoutFeedback>
    )
  }
}

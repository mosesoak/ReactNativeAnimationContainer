// @flow weak
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native'

import Animated_ from 'lib/AnimationContainer/Animated_'

export default class ButtonComponent extends React.Component {
  static propTypes = {
    buttonAnimationStyle: PropTypes.any,
    onPress: PropTypes.func,
  };

  render() {
    return (
      <Animated_ animationKey='button'>
        <Animated.View
          style={[
            this.props.buttonAnimationStyle,
            styles.button,
          ]}
        >
          <TouchableOpacity
            onPress={this.props.onPress}
          >
            <Text color='black'>
              Je Suis un Button
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated_>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 1,
    margin: 20,
  },
})

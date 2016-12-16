// @flow weak
import React, { PropTypes } from 'react'
import {
  Animated,
  Text,
  Image,
  ScrollView,
} from 'react-native'

import flattenStyle from 'flattenStyle'

import View from 'constelation-View'

// class Animated_ extends Animated.AnimatedImplementation {
// }

const animatedStylesByKey = 'animatedStylesByKey'
const animationKey = 'animationKey'

propsWithAnimatedStyles = (props, context) => {

  if (context
    && context[animatedStylesByKey]
    && props[animationKey]
    && context[animatedStylesByKey][props[animationKey]]
  ) {
    let style = flattenStyle(props.style) || {}
    props = {
      ...props,
      style: [
        style,
        context[animatedStylesByKey][props[animationKey]],
      ],
    }
  }
  return props
}

createAnimatedComponent = (Component) => {
  const AnimatedComponent = Animated.createAnimatedComponent(Component)
  class ExtendedAnimatedComponent extends AnimatedComponent
  {
    static contextTypes = {
      animatedStylesByKey: PropTypes.object,
    }

    // This is not working, style is not being consumed by the component

    constructor (props, context) {
      super(propsWithAnimatedStyles(props, context), context)
    }
  }
  return ExtendedAnimatedComponent
}

module.exports = {
  animatedStylesByKey,
  createAnimatedComponent,
  View: createAnimatedComponent(View),
  Text: createAnimatedComponent(Text),
  Image: createAnimatedComponent(Image),
  ScrollView: createAnimatedComponent(ScrollView),
};

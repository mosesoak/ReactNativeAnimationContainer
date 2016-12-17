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

export const animatedStylesByKey = 'animatedStylesByKey'
export const animationKey = 'animationKey'

export default class Animated_ extends React.Component {
  static propTypes = {
    animationKey: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  }

  static contextTypes = {
    animatedStylesByKey: PropTypes.object,
  }

  render () {
    const Child = React.Children.only(this.props.children)
    let propsToPass = Child.props
    let style = flattenStyle(propsToPass.style) || {}

    if (this.props[animationKey]
      && this.context[animatedStylesByKey]
      && this.context[animatedStylesByKey][this.props[animationKey]]
    ) {
      propsToPass = {
        ...propsToPass,
        style: {
          ...style,
          ...this.context[animatedStylesByKey][this.props[animationKey]],
        }
      }
    }

    return (
      React.cloneElement(Child, propsToPass)
    )
  }
}

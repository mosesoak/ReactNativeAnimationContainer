import React, { PropTypes } from 'react'

import { animatedStylesByKey } from './Animated_'


// WIP
// Ultimately I would like to make this a decorator @animationContainer that would inject the context into a container class

const styleSuffix = 'animationStyle'

export default class AnimationContainer extends React.Component {

  static childContextTypes = {
    [animatedStylesByKey]: PropTypes.object,
  }

  getChildContext = () => {
    let styles = {}
    for (let name in this) {
      if (name.indexOf(styleSuffix) > -1) {
        styles[name.split(styleSuffix)[0]] = this[name]
      }
    }
    return {
      [animatedStylesByKey]: styles,
    };
  }
}

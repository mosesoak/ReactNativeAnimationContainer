// @flow

import React from 'react'

import {
  TouchableOpacity,
} from 'react-native'

import Content from './_/Content';

export default class Showcase extends React.Component {
  render() {
    return (
      <View
        flex={1}
        alignVertical='center'
      >
        <Content />
      </View>
    )
  }
}

// @flow

import React from 'react'

import {
  TouchableOpacity,
} from 'react-native'

import ContentAnimation from './_/ContentAnimation';

export default class Magic extends React.Component {
  render() {
    return (
      <View
        flex={1}
        alignVertical='center'
      >
        <ContentAnimation />
      </View>
    )
  }
}

// @flow

import React from 'react'

import {
  TouchableOpacity,
} from 'react-native'

import ContentAnimation from './_/ContentAnimation';

export default class Profile extends React.Component {
  props: {
    value: number,
    onIncreaseCounter: Function,
  }

  render() {
    return (
      <View
        flex={1}
        alignVertical='center'
      >
        <View margin={10}>
          <Text
            center
            size={20}
          >
            This is the Profile scene
          </Text>
        </View>

        {/*<Text center >Click 'Detail' for a threaded view</Text>

        <TouchableOpacity onPress={this.props.onIncreaseCounter} >
          <View margin={10}>
            <Text
              center
              size={20}
            >
              {this.props.value}
            </Text>
          </View>
        </TouchableOpacity>*/}

        <ContentAnimation />

      </View>
    )
  }
}

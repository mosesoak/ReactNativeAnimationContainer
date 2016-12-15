// @flow

import React from 'react'
import TransitionGroup from 'lib/ReactTransitionGroup'

import { Actions } from 'react-native-router-flux'

import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import AnimatedLogo from './_/AnimatedLogo'

/**

    This class demos using ReactTransitionGroup, copied and pasted into the project from
    https://github.com/reactjs/react-transition-group (Facebook split out the library,
    discussion here https://github.com/facebook/react/issues/8125)
**/
export default class Home extends React.Component {
  state = {
    showLogo: true,
  }

  handleShowFullScreenModal = () => {
    Actions.fullDetail()
  }

  handleShowFullScreenModalScene = () => {
    Actions.fullModal()
  }

  handleLogoPress = () => {
    this.setState({
      showLogo: false,
    })
  }

  render() {
    return (
      <View
        flex={1}
        alignHorizontal='center'
        alignVertical='center'
        >

        <TransitionGroup>
          {this.state.showLogo &&
            <AnimatedLogo key='logo' onPress={this.handleLogoPress}/>
          }
        </TransitionGroup>

        <TouchableOpacity style={[styles.button, {marginTop: 60}]} onPress={this.handleShowFullScreenModal}>
          <Text color='black'>
            Full screen Detail scene
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {marginTop: 30}]} onPress={this.handleShowFullScreenModalScene}>
          <Text color='black'>
            Full screen Modal scene
          </Text>
        </TouchableOpacity>

      </View>
    )
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
  },
})

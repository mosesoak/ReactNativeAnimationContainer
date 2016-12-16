// @flow

import React from 'react'
import mobx from 'mobx'
import scenes from '../index'

import ShowcaseAnimation from 'stores/ShowcaseAnimationStore'

import { Router } from 'react-native-router-flux'
import { Provider } from 'mobx-react/native'

/*
This can be used to check what's going over the bridge.
Animated hasn't been upgraded for useNativeDriver: true yet in most cases, so you'll see
lots of  "JS->N : UIManager.updateView(...)" calls in most cases.
Leaving this here so we can double-check that piping animation styles down to
subcomponents doesn't lead to additional inefficiency.

import MessageQueue from 'MessageQueue';
MessageQueue.spy(true);
*/


// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict( true )

// log all mobx actions when in development mode
if (__DEV__) {
  mobx.spy( ev => {
    if (ev.type === 'action') {
      console.log( ev.name )
    }
  })
}

// Will be passed to all Scenes
const getSceneStyle = (/*props*/) => ({
  backgroundColor: 'white',
})

const stores = { ShowcaseAnimation }

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores} >
        <Router
          scenes={scenes}
          getSceneStyle={getSceneStyle}
          navigationBarStyle={{backgroundColor: 'white'}}
          tabBarStyle={{backgroundColor: 'white'}}
          rightButtonTextStyle={{color: '#111111'}}
        />
      </Provider>
    )
  }
}

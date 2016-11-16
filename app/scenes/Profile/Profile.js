// @flow

import React from 'react'
import { observer, inject } from 'mobx-react/native'
import { CounterStore } from 'stores/counter'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default inject('counter')(observer(
  class Profile extends React.Component {
    props: {
      counter: CounterStore
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            This is the Profile scene
          </Text>
          <Text style={{textAlign: 'center'}}>Click 'Detail' for a threaded view</Text>

          <TouchableOpacity onPress={() => this.props.counter.increase()} >
            <Text style={styles.welcome}>{this.props.counter.value}</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  titleStyle: {
    color: '#111111',
  },
})
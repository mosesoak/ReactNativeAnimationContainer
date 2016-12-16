// @flow weak
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native'

import { observer } from 'mobx-react/native';
import ShowcaseAnimationStore from 'stores/ShowcaseAnimationStore'

import View from 'constelation-View';

import ButtonComponent from './_/ButtonComponent';
import ImageComponent from './_/ImageComponent';

// Experimenting with storing animations in a mobx store.
// Doesn't feel right to me - it's located too far from the component it acts on
// and view styles don't feel appropriate to manage here

@observer
export default class Content extends React.Component {
  static propTypes = {
  };

  // animation triggers

  componentWillMount = () => {
    ShowcaseAnimationStore.doIntro()
  }

  render() {
    console.log("Child render")
    return (
      <View
        flexGrow={1}
        align='center'
        justify='center'
      >

        <Animated.Image
          // this piece of content lives in this class
          key='starsLogo'
          style={[
            {
              width: 100,
              height: 100,
            },
            ShowcaseAnimationStore.starsLogoAnimationStyle,
          ]}
          source={require('images/logo.png')}
        />

        <Animated.Text
          // this piece of content lives in this class
          color='black'
          style={[{padding: 20}, ShowcaseAnimationStore.starsCaptionAnimationStyle]}
        >
          This example keeps animations in a mobx store.
        </Animated.Text>

        <ImageComponent
          // this piece of content is a subcomponent
          instrumentLogoAnimationStyle={ShowcaseAnimationStore.instrumentLogoAnimationStyle}
        />

        <ButtonComponent
          // this piece of content is a subcomponent
          buttonAnimationStyle={ShowcaseAnimationStore.buttonAnimationStyle}
          onPress={ShowcaseAnimationStore.doOutro}
        />

      </View>
    );
  }
}

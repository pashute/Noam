import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import MainSplash from './MainSplash';
import MainInPlace from './MainInPlace';
import MainWay from './MainWay';
import MainNearby from './MainNearby';

storiesOf('Noam main', module)
  .add('Splash', () => <MainSplash />)
  .add('Main tabs', () => <MainInPlace />);

// storiesOf('Belcome', module).add('to Storybook', () => (
//   <Demo0 showApp={linkTo('Button')} />
// ));

// storiesOf('Demo1', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Demo1 onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Demo1>
//   ))
//   .add('with some emoji', () => (
//     <Demo1 onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Demo1>
//   ));

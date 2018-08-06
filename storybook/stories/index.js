import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MainSplash from 'storybook/stories/MainSplash';
// Moshe: if we had time, I would rename mainSlash to SlashStory
// something like this. need more time. so later.
storiesOf('splashStory', module).add('to Storybook', () => (
  <MainSplash />
));




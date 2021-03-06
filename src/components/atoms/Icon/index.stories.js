import React from 'react';
import { action } from '@storybook/addon-actions';
import { TrashCanIcon } from './index.js';

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon />)
  .add('クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました') } />)

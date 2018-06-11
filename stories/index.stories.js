import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import NavPanel from '../src/components/navPanel/navPanel.jsx';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('NavPanel', module)
  .add('Search By', () => (
    <NavPanel
      primaryBrand='SEARCH BY'
      links={[{
        active: true,
        param: 'title',
        title: 'TITLE',
        handler: action('clicked title'),
      }, {
        active: false,
        param: 'genre',
        title: 'GENRE',
        handler: action('clicked genre'),
      }]}
      navBtn={{
        title: 'SEARCH',
        handler: action('clicked search button'),
      }}
    />
  ));

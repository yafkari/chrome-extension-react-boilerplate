import React from 'react';
import { render } from 'react-dom';

import './views/assets/global.scss';

function App() {
  return (
    <div>
      <h1>Chrome extension React boilerplate</h1>
      <p>Don&apos;t forget to star our project!</p>
      <a 
        href='https://github.com/yafkari/chrome-extension-react-boilerplate' 
        target='_blank' 
        rel='noopener noreferrer'>Repository</a>
    </div>
  )
}

render(<App />, document.getElementById('root'));
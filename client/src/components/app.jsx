import React from 'react';

import WebcamDisplay from './WebcamDisplay.jsx';
import SearchPanel from './SearchPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='appContainer'>
        <SearchPanel />
        <WebcamDisplay />
      </div>
    );
  }
}

export default App;

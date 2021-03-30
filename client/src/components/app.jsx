import React from 'react';
const axios = require('axios');

import WebcamDisplay from './WebcamDisplay.jsx';
import SearchPanel from './SearchPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getWebcams = this.getWebcams.bind(this);
  }

  getWebcams() {
    axios.get('/webcams').then((response) => console.log(response));
  }

  render() {
    return (
      <div className='appContainer'>
        <SearchPanel getWebcams={this.getWebcams} />
        <WebcamDisplay />
      </div>
    );
  }
}

export default App;

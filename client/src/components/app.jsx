import React from 'react';
const axios = require('axios');

import WebcamDisplay from './WebcamDisplay.jsx';
import SearchPanel from './SearchPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webcamList: [],
    };

    this.getWebcams = this.getWebcams.bind(this);
  }

  getWebcams() {
    axios.get('/webcams').then((response) => {
      this.setState({ webcamList: response.data.result.webcams });
    });
  }

  render() {
    return (
      <div className='appContainer'>
        <SearchPanel
          getWebcams={this.getWebcams}
          webcamList={this.state.webcamList}
        />
        <WebcamDisplay />
      </div>
    );
  }
}

export default App;

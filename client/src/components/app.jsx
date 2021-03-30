import React from 'react';
const axios = require('axios');

import WebcamDisplay from './WebcamDisplay.jsx';
import SearchPanel from './SearchPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webcamList: [],
      selectedWebcam: {},
    };

    this.getWebcams = this.getWebcams.bind(this);
    this.updateSelectedWebcam = this.updateSelectedWebcam.bind(this);
  }

  getWebcams() {
    axios.get('/webcams').then((response) => {
      this.setState({ webcamList: response.data.result.webcams });
    });
  }

  updateSelectedWebcam(obj) {
    console.log(obj);
    this.setState({ selectedWebcam: obj });
  }

  render() {
    return (
      <div className='appContainer'>
        <SearchPanel
          getWebcams={this.getWebcams}
          webcamList={this.state.webcamList}
          updateSelectedWebcam={this.updateSelectedWebcam}
        />
        <WebcamDisplay selectedWebcam={this.state.selectedWebcam} />
      </div>
    );
  }
}

export default App;

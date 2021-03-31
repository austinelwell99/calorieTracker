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
      total: 0,
    };

    this.getWebcams = this.getWebcams.bind(this);
    this.updateSelectedWebcam = this.updateSelectedWebcam.bind(this);
  }

  componentDidMount() {
    this.getWebcams({ offset: 0 }, () =>
      this.updateSelectedWebcam(this.state.webcamList[1])
    );
  }

  getWebcams(data, cb = () => {}) {
    let options = {
      offset: data.offset,
    };
    if (data.cat !== 'all') {
      options.cat = data.cat;
    }
    if (data.con !== 'all') {
      options.con = data.con;
    }
    axios
      .get('/webcams', { params: options })
      .then((response) => {
        this.setState({
          webcamList: response.data.result.webcams,
          total: response.data.result.total,
        });
      })
      .then(cb);
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
          total={this.state.total}
        />
        <WebcamDisplay selectedWebcam={this.state.selectedWebcam} />
      </div>
    );
  }
}

export default App;

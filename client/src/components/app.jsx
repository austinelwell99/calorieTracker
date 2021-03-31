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
      favoritesList: [],
      favoriteIDsList: [],
    };

    this.getWebcams = this.getWebcams.bind(this);
    this.updateSelectedWebcam = this.updateSelectedWebcam.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount() {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let storedFavoriteIDs =
      JSON.parse(localStorage.getItem('favoriteIDs')) || [];
    this.setState({ favoritesList: storedFavorites });
    this.setState({ favoriteIDsList: storedFavoriteIDs });

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

  toggleFavorite(obj) {
    if (this.state.favoriteIDsList.includes(obj.id)) {
      let filteredFavIDsList = this.state.favoriteIDsList.filter(
        (id) => id !== obj.id
      );
      let filteredFavList = this.state.favoritesList.filter(
        (fav) => fav.id !== obj.id
      );
      this.setState(
        {
          favoritesList: filteredFavList,
          favoriteIDsList: filteredFavIDsList,
        },
        this.saveToLocalStorage
      );
    } else {
      let temp1 = [...this.state.favoriteIDsList];
      temp1.push(obj.id);
      let temp2 = [...this.state.favoritesList];
      temp2.push(obj);
      this.setState(
        { favoritesList: temp2, favoriteIDsList: temp1 },
        this.saveToLocalStorage
      );
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favoritesList));
    localStorage.setItem(
      'favoriteIDs',
      JSON.stringify(this.state.favoriteIDsList)
    );
  }

  render() {
    return (
      <div className='appContainer'>
        <SearchPanel
          getWebcams={this.getWebcams}
          webcamList={this.state.webcamList}
          updateSelectedWebcam={this.updateSelectedWebcam}
          total={this.state.total}
          favoritesList={this.state.favoritesList}
          favoriteIDsList={this.state.favoriteIDsList}
          toggleFavorite={this.toggleFavorite}
          selectedWebcamId={this.state.selectedWebcam.id}
        />
        <WebcamDisplay selectedWebcam={this.state.selectedWebcam} />
      </div>
    );
  }
}

export default App;

import React from 'react';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: 'all',
      con: 'all',
      offset: 0,
    };
  }

  render() {
    const { getWebcams, total } = this.props;
    return (
      <div className='searchOptionsContainer'>
        <div className='optionsTopBar'>
          <div>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              onChange={(e) => this.setState({ cat: e.target.value })}
            >
              <option value='all'>All</option>
              <option value='airport'>Airport</option>
              <option value='bay'>bay</option>
              <option value='beach'>Beach</option>
              <option value='building'>Building</option>
              <option value='camping'>Camping</option>
              <option value='city'>City</option>
              <option value='coast'>Coast</option>
              <option value='forest'>Forest</option>
              <option value='golf'>Golf</option>
              <option value='harbor'>Harbor</option>
              <option value='indoor'>Indoor</option>
              <option value='island'>Island</option>
              <option value='lake'>Lake</option>
              <option value='landscape'>Landscape</option>
              <option value='marketplace'>Marketplace</option>
              <option value='mountain'>Mountain</option>
              <option value='park'>Park</option>
              <option value='pool'>Pool</option>
              <option value='resort'>Resort</option>
              <option value='meteo'>Sky</option>
              <option value='sportarea'>Sport Area</option>
              <option value='square'>Square</option>
              <option value='traffic'>Traffic</option>
              <option value='underwater'>Underwater</option>
              <option value='water'>Water</option>
            </select>
          </div>
          <div>
            <label htmlFor='continent'>Continent</label>
            <select
              name='continent'
              id='continent'
              onChange={(e) => this.setState({ con: e.target.value })}
            >
              <option value='all'>All</option>
              <option value='AS'>Asia</option>
              <option value='AF'>Africa</option>
              <option value='EU'>Europe</option>
              <option value='NA'>North America</option>
              <option value='OC'>Oceania</option>
              <option value='SA'>South America</option>
            </select>
          </div>
          <button
            className='searchButton'
            onClick={() =>
              this.setState({ offset: 0 }, () => getWebcams(this.state))
            }
          >
            Search
          </button>
        </div>
        <div className='optionsBottomBar'>
          <button
            disabled={this.state.offset - 10 < 0}
            onClick={() =>
              this.setState({ offset: this.state.offset - 10 }, () =>
                getWebcams(this.state)
              )
            }
          >
            Previous Page
          </button>
          <button
            className='nextPageButton'
            disabled={this.state.offset + 10 >= total}
            onClick={() =>
              this.setState({ offset: this.state.offset + 10 }, () =>
                getWebcams(this.state)
              )
            }
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}

export default SearchOptions;

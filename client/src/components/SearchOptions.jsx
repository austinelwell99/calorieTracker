import React from 'react';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: 'all',
      con: 'all',
    };
  }

  render() {
    const { getWebcams } = this.props;
    return (
      <div className='searchOptionsContainer'>
        <div>
          <label htmlFor='category'>Select Category</label>
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
          <label htmlFor='continent'>Select Continent</label>
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
        <button onClick={() => getWebcams(this.state)}>Search</button>
      </div>
    );
  }
}

export default SearchOptions;

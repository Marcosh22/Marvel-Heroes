import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { HeroList } from './components/HeroList/HeroList';
import Marvel from './utils/api';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      loading: false
    }

    this.searchHero = this.searchHero.bind(this);
    this.searchHero("%");
  }

  searchHero(value) {
    Marvel.searchHero(value).then(heroes => {
      this.setState({heroes: heroes, loading: true});
    }).then(this.setState({loading: false}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search search={ this.searchHero }/>
        <HeroList loading={this.state.loading} heroes={ this.state.heroes }/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import TopMenu from './component/TopMenu';
import Banner from './component/Banner'
import Programs from './component/Programs'
import AboutUs from './component/AboutUs'
import News from './component/News'


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Banner />
        <Programs />
        <AboutUs />
        <News />
      </div>
    );
  }
}

export default App;
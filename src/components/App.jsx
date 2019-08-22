import React, {Component, Fragment} from 'react';
import { getMe, getPair } from '../api/ApiFeedBack';
import Pair from './Pair';
import DetailedPair from './DetailedPair';


class App extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      pairs: []
    }
  }

  showDetailsOfPair = (event, pair) => {
    getPair(pair.id)
      .then(res => {
          this.setState({detailedPair: res});
      });
  }

  componentDidMount(){
    getMe().then(res=>{
      this.setState({
        name: res.name,
        email: res.email,
        pairs: res.pairsDto
      });
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Main page</h1>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <div>{this.state.pairs.map(pair => 
            <Pair showPairDetails={this.showDetailsOfPair} key={pair.id} pair={pair} />
          )}
        </div>
        <DetailedPair pairDetails={this.state.detailedPair}/>
      </Fragment>
    );
  }
}

export default App;

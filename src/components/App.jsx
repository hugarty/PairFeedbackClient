import React, {Component, Fragment} from 'react';
import { getMe, getPair } from '../api/ApiFeedBack';
import Pair from './Pair';
import DetailedPair from './DetailedPair';
import AddPair from './AddPair';


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

  addPair = (pair) =>{
    let pairs = this.state.pairs;
    pairs.push(pair);
    this.setState({pairs:pairs});
  }

  render() {
    return this.state.pairs.length > 0 ? (
      <Fragment>
        <h1>Main page</h1>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <div>{this.state.pairs.map(pair => 
            <Pair showPairDetails={this.showDetailsOfPair} key={pair.id} pair={pair} />
          )}
        </div>
        <AddPair addPair={this.addPair}/>
        <DetailedPair pairDetails={this.state.detailedPair}/>
      </Fragment>
    ) : <div><h1>Access Denied</h1>ESSE BLINK DE TELA VOCE TEM QUE RESOLVER COM O TOKEN SERVICE</div>;
  }
}

export default App;

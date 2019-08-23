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

  componentDidMount(){
    getMe().then(res=>{
      this.setState({
        name: res.name,
        email: res.email,
        pairs: res.pairsDto
      });
    })
  }

  addPairToState = (pair) =>{
    let pairs = this.state.pairs;
    pairs.push(pair);
    this.setState({pairs:pairs});
  }

  deletePairInState = (pairId) =>{
    let pairs = this.state.pairs.filter(pair=>{
      return pair.id !== pairId;
    });
    this.setState({pairs:pairs});
  }

  showDetailsOfPair = (event, pair) => {
    getPair(pair.id)
      .then(res => {
          this.setState({detailedPair: res});
      });
  }

  addFeedbackToState = updatedPair =>{
    this.setState({detailedPair: updatedPair});
  }

  doLogout = ()=>{
    sessionStorage.removeItem('tokenFeedback');
    this.props.history.push('/login');
  }

  render() {
    return this.state.name.length > 1 ? (
      <Fragment>
        <h1>Main page</h1>
        <button onClick={this.doLogout}>Logout</button>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <div>{this.state.pairs.map(pair => 
            <Pair key={pair.id} 
                  pair={pair} 
                  showPairDetails={this.showDetailsOfPair}
                  deletePairInState={this.deletePairInState} />
          )}
        </div>
        <AddPair addPairToState={this.addPairToState}/>
        <DetailedPair addFeedbackToState={this.addFeedbackToState}pairDetails={this.state.detailedPair}/>
      </Fragment>
    ) : <div><h1>Access Denied</h1>ESSE BLINK DE TELA VOCE TEM QUE RESOLVER COM O TOKEN SERVICE</div>;
  }
}

export default App;

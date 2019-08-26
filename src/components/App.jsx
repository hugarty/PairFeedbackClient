import React, {Component, Fragment} from 'react';
import { getMe, getPair } from '../api/ApiFeedBack';
import Pair from './Pair';
import DetailedPair from './DetailedPair';
import AddPair from './AddPair';
import Loadingsvg from './svg/loadingsvg.jsx'


class App extends Component{
  constructor(){
    super();
    this.state = {
      showPage: false,
      name: '',
      email: '',
      pairs: []
    }
  }

  componentDidMount(){
    getMe().then(res=>{
      this.setState({
        showPage: true,
        name: res.name,
        email: res.email,
        pairs: res.pairsDto
      });
    }).catch(err => {
      this.doLogout();
    });
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

  showPairDetails = (event, pair) => {
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
    return this.state.showPage ? (
      <Fragment>
        <div className="flex-wrap space-between align-baseline container">
          <div>
            <h3>{this.state.name}</h3>
            <h5>{this.state.email}</h5>
          </div>
          <button onClick={this.doLogout}>Logout</button>
        </div>
        <AddPair addPairToState={this.addPairToState}/>
        <div className=" flex-wrap justify-center">
          {this.state.pairs.map(pair => 
            <Pair key={pair.id} 
                  pair={pair} 
                  showPairDetails={this.showPairDetails}
                  deletePairInState={this.deletePairInState} />
          )}
        </div>
        <DetailedPair addFeedbackToState={this.addFeedbackToState}pairDetails={this.state.detailedPair}/>
      </Fragment>
    ) : <Loadingsvg /> ;
  }
}

export default App;

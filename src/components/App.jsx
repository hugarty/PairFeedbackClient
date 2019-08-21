import React, {Component, Fragment} from 'react';
import { getMe } from '../api/ApiFeedBack';

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

  render() {
    return (
      <Fragment>
        <h1>Main page</h1>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <div>{this.state.pairs.map(pair => <p key={pair.id}>
          <span>Nome: {pair.name} - Average: {pair.average}</span></p>)}</div>
      </Fragment>
    );
  }
}

export default App;

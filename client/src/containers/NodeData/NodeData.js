import React, { Component } from 'react';
import axios from 'axios';

class NodeData extends Component {
  state = {
    name: null,
    mongo_name: null,
  };

  async fetchValues() {
    const res = await axios.get('/node/name');
    this.setState({ name: res.data.name });
  }

  async fetchMongoValues() {
    console.log('[fetchMongoValues] db start');
    const res = await axios.get('/node/mongo/name');
    console.log('[fetchMongoValues] db done');
    console.log('res', res);
    this.setState({ mongo_name: res.data.name });
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchMongoValues();
  }

  render() {
    let name = null;
    if (this.state.name !== null) {
      name = <div>{this.state.name}</div>;
    }

    let mongo_name = null;
    if (this.state.mongo_name !== null) {
      mongo_name = <div>{this.state.mongo_name}</div>;
    }

    return (
      <div>
        <h1>React!!!!</h1>
        <p>{name}</p>
        <p>{mongo_name}</p>
      </div>
    );
  }
}

export default NodeData;

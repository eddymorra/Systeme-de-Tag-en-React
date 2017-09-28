import React, { Component } from 'react';
import './App.css';
import Tags from './components/tags/Tags';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      value: [],
      city: ['lyon', 'paris', 'marseille', 'toulouse', 'lille'],
      tags: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Mise à jour du state 'value'
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // Action au click (ajouter un tag au tableau tags)
  handleSubmit(event) {
    event.preventDefault();
    for (var index = 0; index < this.state.city.length; index++) {
      let element = this.state.city[index];
      if(this.state.value.indexOf(element) >= 0 && this.state.tags.indexOf(element) < 0) {
        let tagsArray = this.state.tags;
        tagsArray.push(element);
        this.setState({tags: tagsArray});
      }
    }
    this.loadState();
  }

  // Afficher correctement le tableau 'value'.
  loadState() {
    let line = '';
    for (var index = 0; index < this.state.tags.length; index++) {
      let element = this.state.tags[index];
      line = line + element + ' '; 
    }
    this.setState({value: line});
  }

  // Supprimer un tag
  deleteTag = (i) => {
    let tagsArray = this.state.tags;
    tagsArray.splice(i, 1);
    this.setState({tags: tagsArray});
    this.loadState();
  }

  // Rendu
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="OK" />
        </form>
        <Tags tags={this.state.tags} delete={this.deleteTag} />
      </div>
    );
  }

}

export default App;

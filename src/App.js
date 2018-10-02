import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Name from './component/Name';
import NameInput from './component/NameInput'
import './App.css';
import AddressTextArea from './component/AddressTextArea';
import CityDropDown from './component/CityDropDown';
import Address from './component/Address';
import City from './component/City';
import BlogPosts from './component/BlogPosts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'akash',
      id: '574365',
      city: 'Delhi',
      address: 'Banca sella',
      citynames: [
        'chennai',
        'delhi',
        'mumbai',
        'hyderabad'
      ],
      blogPosts: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ name: 'roxtar' });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => { return response.json(); })
      .then((data) => { console.log(data); this.setState({ blogPosts: data }) });
  }

  updateName = name => {
    this.setState(
      {
        name,
      }
    )
  }

  updateState = (fieldName, event) => {
    const newState = { ...this.state };
    newState[fieldName] = event.target.value;
    this.setState(newState);
  }

  renderComp() {
    ReactDOM.render(<App name="akash" />, document.getElementById('root'));
  }

  render() {
    return (
      <div className='container'>
        {/*<Name name={this.state.name} />
        <NameInput updateName={this.updateState} />
        <button onClick={this.handleClick}>button</button>
        <Address address={this.state.address} />
        <City city={this.state.city} />

        <AddressTextArea address={this.state.address} onUpdate={this.updateState} />
        <CityDropDown city={this.state.city} onUpdate={this.updateState} values={this.state.citynames} />*/}
        <BlogPosts posts={this.state.blogPosts} />
        <h1 className="text-primary">Hello World</h1>
      </div>
    );
  }
}

export default App;

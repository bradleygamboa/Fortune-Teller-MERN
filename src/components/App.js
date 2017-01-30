import React, { Component } from 'react';
import BookList from '../containers/BookList.js';

export default class App extends Component {
  constructor(props){
    super(props);
    // initialize the component's state here.
    // bind methods here.
  }
  render() {
    return (
    <div>
    <header className="text-center">Zoltar Speaks</header>
    
    <div className="jumbotron text-center">
        <BookList />
    </div>

    <footer className="text-center">
        <a href="http://www.bradleygamboa.me">Portfolio</a>&nbsp;
        <a href="http://www.github.com/bradleygamboa">GitHub</a>&nbsp;
        <a href="http://www.linkedin.com/in/bradleygamboa">Linkedin</a>
    </footer>

    </div>
    );
  }
}

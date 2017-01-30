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

        <div className="text-center">
            <iframe width="378" height="270" src="https://www.youtube.com/embed/uigpbM983dg" frameBorder="0" allowFullScreen></iframe>&nbsp;
            <iframe width="377" height="270" src="https://www.youtube.com/embed/FQ0sHPD5JMg" frameBorder="0" allowFullScreen></iframe>&nbsp;
            <iframe width="377" height="270" src="https://www.youtube.com/embed/YOKGJvLENqI" frameBorder="0" allowFullScreen></iframe>
        </div>

    <footer className="navbar-fixed-bottom text-center">
        <a target="_blank" href="http://www.bradleygamboa.me"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i></a>&nbsp;
        <a target="_blank" href="http://www.github.com/bradleygamboa"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i></a>&nbsp;
        <a target="_blank" href="http://www.linkedin.com/in/bradleygamboa"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
    </footer>

    </div>
    );
  }
}

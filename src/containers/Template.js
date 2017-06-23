import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TicTacTurn</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Header;

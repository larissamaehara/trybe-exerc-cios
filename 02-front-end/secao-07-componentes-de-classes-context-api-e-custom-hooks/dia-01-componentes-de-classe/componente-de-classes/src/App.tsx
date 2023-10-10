import React from 'react';

class App extends React.Component {
  handleClick = () => {
    alert('clicou!');
  };

  render() {
    return (
      <div className="App">
        <button onClick={ this.handleClick }>Clique!</button>
      </div>
    );
  }
}

export default App;

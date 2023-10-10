import React from 'react';
import Loading from './Loading';

class App extends React.Component {
  state = {
    isLoading: true,
    dogImageUrl: '',
  };

  componentDidMount() {
    console.log('Componente montado.');
    this.handleFetch();
  }

  componentDidUpdate() {
    console.log('Componente atualizado.');
  }

  handleFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({ isLoading: false, dogImageUrl: data.message });
  };

  render() {
    const { isLoading, dogImageUrl } = this.state;

    if (isLoading) return <Loading />;
    return (
      <div className="App">
        <h1>Random Dog</h1>
        <img alt="dog" src={ dogImageUrl } />
      </div>
    );
  }
}

export default App;

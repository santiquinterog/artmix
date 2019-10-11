import React from 'react';
import './styles.scss';
import Menu from './components/Menu';
import Main from './components/Main';
import Zindex from './components/Zindex';

const AppContext = React.createContext({
  works: []

});

class Obra extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          return (
            <div className="obra">
              {value.works.map(work =>
                <div>
                  <span><img src={work.img} /></span>
                  <span>{work.autor}</span>
                </div>
              )}
            </div>
          );
        }}

      </AppContext.Consumer>
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      Obras: [],
    };
    this.anadirObras = this.anadirObras.bind(this);
    this.obtenerObras = this.obtenerObras.bind(this);

  }
  componentDidMount() {
    this.anadirObras();
    this.obtenerObras();
  }
  anadirObras() {     
    let tempArray = JSON.parse(localStorage.getItem('obras'))     
    if (tempArray == null) {
      const obras = [{ autor: 'La celestina', img: 'https://http2.mlstatic.com/libro-la-celestina-tragicomedia-de-calisto-y-melibea-D_NQ_NP_770218-MLA25923781071_082017-F.jpg' },
      { autor: 'La Odisea', img: 'http://bit.ly/2OycArf' }];       
      localStorage.setItem("obras", JSON.stringify(obras));       
      console.log('Obras guardadas');     
    }    
  }

  obtenerObras() {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    this.setState({ Obras: tempArray });

  }
  
  render() {
    return (
      <div className="app">
        <AppContext.Provider value={{ works: this.state.Obras }}>
          <Menu/>
          <Main>
            <Obra></Obra>
          </Main>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;

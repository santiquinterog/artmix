import React from 'react';
import './styles.scss';
import Menu from './components/Menu';
import Main from './components/Main';
import Modal from 'react-modal';

const AppContext = React.createContext({
  works: []

});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class ModalWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: '',
      img: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.anadirObras = this.anadirObras.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    var newPiece = { name: this.state.name, img: this.state.img }
    tempArray.push(newPiece);
    localStorage.setItem("obras", JSON.stringify(tempArray));
    alert('Submitted ' + this.state.name);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  anadirObras() {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    let newPiece = { name: this.state.name, img: this.state.img }
    const obras = [...tempArray];
    localStorage.setItem("obras", JSON.stringify(obras));
    console.log('Guardado');
  }

  render() {
    return (
      <div>
        <button className='btn btn-red' onClick={this.openModal}>Add Piece</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <h2>Add  a new Piece</h2>
          <button onClick={this.closeModal}>close</button>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
            </label>
            <br />
            <label>
              img:
          <input type="text" value={this.state.img} name="img" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

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

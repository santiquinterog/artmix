import React from 'react';
import './styles.scss';
import Menu from './components/Menu';
import Main from './components/Main';
import Modal from 'react-modal';

const Context = React.createContext({
  works: []
});

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#root');

class ModalV extends React.Component {
  
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      autor: '',
      img: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addPiece = this.addPiece.bind(this);
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

  addPiece() {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    let newPiece = { name: this.state.name, img: this.state.img }
    const obras = [...tempArray];
    localStorage.setItem("obras", JSON.stringify(obras));
    console.log('saved!');
  }

  render() {
    return (
      <div>
        <button className='btn btn-red' onClick={this.openModal}>Add Piece</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles}
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

class Piece extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <div className="obra">
              {value.works.map(work =>
                <div>
                  <img src={work.img} />
                  <h4>{work.name}</h4>
                </div>
              )}
            </div>
          );
        }}

      </Context.Consumer>
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pieces: [],
    };
    this.addPieces = this.addPieces.bind(this);
    this.getPieces = this.getPieces.bind(this);
  }
  componentDidMount() {

    this.getPieces();
  }

  addPieces() {
    let tempArray = JSON.parse(localStorage.getItem('obras'))
    if (tempArray.length == 0) {
      const obras = [{ name: 'La Odisea', img: 'http://bit.ly/2OycArf' }, { name: 'La Cabaña del Tío Tom', img: 'http://bit.ly/35qoxVJ' }, { name: 'Frankenstein', img: 'http://bit.ly/33mc2sF' }];
      localStorage.setItem("obras", JSON.stringify(obras));
      console.log('Seed Pieces saved!');
    }

  }
  getPieces() {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    this.setState({ pieces: tempArray });

  }

  render() {
    console.log(this.state.pieces);
    return (
      <div className="app">
         <Context.Provider value={{obras: this.state.pieces}}>
          <Menu />
          <Main />
          <ModalV></ModalV>
          <Piece></Piece>
        </Context.Provider>
      </div>
    );
  }
}

export default App;

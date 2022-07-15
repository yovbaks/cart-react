// import Cart from "./container/cart"
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './components/PokemonForm/PokemonForm';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
// const App =()=> {
//   return <div className="App">
//     <Cart/>
//   </div>
// }

// export default App

export default class App extends Component {
  state = {
    pokemonName:'',
  }


  handleFormSubmit = pokemonName => {
    this.setState({pokemonName})
  }
  // componentDidMount() {
  //   this.setState({loading:true})


  //   setTimeout(() => {
  //      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then((res) => res.json())
  //     .then((pokemon) => this.setState({ pokemon })).finally(()=>this.setState({loading:false}))
  //   },2000)
   
  // }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
        {/* {this.state.loading && <h1>Загружаєм....</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
      </div>
    )
  }
}

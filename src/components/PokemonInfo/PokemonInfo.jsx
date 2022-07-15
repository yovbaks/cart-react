import { Component } from 'react';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView';
import PokemonDataView from '../PokemonDataView/PokemonDataView';
import PokemonPendingView from '../PokemonPendingView/PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName
    const nextName = this.props.pokemonName
    if (prevName !== nextName) {
      console.log('Змінилось імя покемона')

      this.setState({ status: 'pending' })

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`Нема покемона ${nextName}`))
        })
        .then((pokemon) => this.setState({ pokemon, status: 'resolved' }))
        .catch((error) => this.setState({ error, status: 'rejected' }))
      },1000)
    }
  }

  render() {
    const { pokemon, error, status } = this.state

    if (status === 'idle') {
      return <div>Введите имя покемона</div>
    }

    if (status === 'pending') {
      return <PokemonPendingView/>
    }
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message}/>
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />
    }
  }
}

import React, { Component } from 'react'
import axios from 'axios';
// import { isContext } from 'vm';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'SEARCH_TRACKS':
        return {
          ...state,
          track_list: action.payload,
          heading: 'Search Results'
        };
      default:
        return state;
    }
  };

export class Provider extends Component {
    state = {
        track_list : [],
        heading: 'Top ten tracks',
        dispatch: action => this.setState(state => reducer(state, action))
    }
    componentDidMount(){
        // start at 39:19
        // JSON WEB TOKEN TO GENERATE AN AUTH
        // PREGUNTA PARA CHARLA ANTES DEL EJERCICIO
        // DIFERENCIA ENTRE TIPOS DE COMPONENTES QUE SE PUEDEN CREAR CON REACT
        // CASOS DE USO DE LOS DIFERENTES COMPONENTES 
        // SINTAXIS QUE SE PUEDEN ENCONTRAR
        // EXPLICACIÓN Y MANEJO DE LAS PROPS EN REACT Y COMO DEESTRUCTURAR UN SET DE PROPS
        // DIFERENCIA ENTRE CONTEXT API Y REDUX LIBRARY
    
        axios
        .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
              process.env.REACT_APP_MM_KEY
            }`
        )
        .then((result)=> {
            this.setState({
                track_list : result.data.message.body.track_list
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
    return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>      
    )
  }
}

export const Consumer = Context.Consumer
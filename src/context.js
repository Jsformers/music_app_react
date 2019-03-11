import React, { Component } from 'react'
import { isContext } from 'vm';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list : [
            { track: { track_name: 'lorem' } },
            { track: { track_name: 'ipsum' } },
            { track: { track_name: 'data mockup' } },
        ],
        heading: 'Top ten tracks'
    }    
    render() {
    return (
      <isContext.Provider value={this.state}>
        {this.props.children}
      </isContext.Provider>
    )
  }
}

export const Consumer = Context.Consumer
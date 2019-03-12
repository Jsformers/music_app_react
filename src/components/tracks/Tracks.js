import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Track from './Track'
export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
          {value => {

              const { track_list } = value
              if(track_list === undefined || track_list.length === 0 ){
                console.log(track_list)
                return <Spinner />
              }else{
                console.log(track_list)
                return (
                <>
                  <h1>Top ten</h1>
                  <div className="row">
                    {track_list.map(track => (
                      <Track key={track.track.track_id} track={track.track} />
                    ) )}                  
                  </div>
                </>
                )
              }
          }}
      </Consumer>
    )
  }
}

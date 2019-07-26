import React from 'react'
import {Grid, Header,} from 'semantic-ui-react'

export default function EpisodeCard (props) {
  return (
  // <span>
  // //   <img src={props.image}/>
  // //   {props.name}
  // //   {props.species}
  // //   {props.status}
  // //   {/* {props.location} */}
  // //   {props.orgin}</span>
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Header as='h2'>{props.name}</Header>
        <p>Air Date: {props.airDate}</p>
        <p>Episode: {props.episode}</p>
        {/* {props.characters} */}
      </Grid.Column>
     
    </Grid.Row>
  </Grid>
  )}

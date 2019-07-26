import React from 'react'
import {Grid, Header, Image} from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
  // <span>
  // //   <img src={props.image}/>
  // //   {props.name}
  // //   {props.species}
  // //   {props.status}
  // //   {/* {props.location} */}
  // //   {props.orgin}</span>
  <Grid columns={1} >
    <Grid.Row>
      <Grid.Column>
        <Image className = 'card-image'src={props.image}/>
        <Header as='h2'>{props.name}</Header>
        <p>{props.species} {props.status}</p>
        <p>Orgin: {props.orgin}</p>
      </Grid.Column>
     
    </Grid.Row>
  </Grid>
  )}

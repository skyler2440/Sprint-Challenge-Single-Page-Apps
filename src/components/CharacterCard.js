import React from 'react'
import {Grid, Header, Image, Icon} from 'semantic-ui-react'

export default function CharacterCard ({image, name, species, status, origin}) {
  

  return (
  // <span>
  // //   <img src={image}/>
  // //   {name}
  // //   {species}
  // //   {status}
  // //   {/* {location} */}
  // //   {orgin}</span>
  <Grid columns={1} >
    
      <Grid.Column>
        <Image className = 'card-image'src={image}/>
        <Header as='h2'>{name}</Header>
      {species} {status}
       <p>Origin: {origin}</p>
       <Icon name="user"></Icon>Characters
      </Grid.Column>
     
  </Grid>
  )}

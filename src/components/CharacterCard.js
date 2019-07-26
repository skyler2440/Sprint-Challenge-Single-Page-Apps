import React from "react";
import { Image, Icon, Card } from "semantic-ui-react";

export default function CharacterCard({
  image,
  name,
  species,
  status,
  origin
}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Image src={image} />
        </Card.Header>
        <Card.Description>
          <h1>{name}</h1>
          {species} {status}
          <p>{origin}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra align="right">
        <Icon name="user" />
        Characters
      </Card.Content>
    </Card>
  );
}

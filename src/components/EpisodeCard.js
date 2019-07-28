import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard({ name, airDate, episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          <h3>{airDate}</h3>
          {episode}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

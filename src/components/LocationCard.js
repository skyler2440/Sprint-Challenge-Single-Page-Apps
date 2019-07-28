import React from "react";
import { Card } from "semantic-ui-react";
export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <h3>{type}</h3>
            {dimension}
          </Card.Description>
        </Card.Content>
        <Card.Content extra align="right">
          <h5>{residents} residents</h5>
        </Card.Content>
      </Card>
    </div>
  );
}

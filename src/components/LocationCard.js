import React from "react";
import { Grid, Header } from "semantic-ui-react";
export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <Grid columns={1}>
        <Grid.Column>
          <Grid.Row>
            <Header as="h1">{name}</Header>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3">{type}</Header>
          </Grid.Row>
          <Grid.Row>
            <Header as="h4">{dimension}</Header>
          </Grid.Row>
          <Grid.Row align='right'>
            <Header as="h5">{residents} Residents</Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
}

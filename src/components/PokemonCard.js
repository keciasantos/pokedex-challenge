import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles/PokemonCard.css";

export default function PokemonCard({ pokemon, index }) {
  console.log(pokemon);
  return (
    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
      <Link to={`/pokemon/${pokemon.name}`} className="Link">
        <Card className="Card">
          <CardContent className="CardContent">
            <Typography component="div" variant="h6">
              #{pokemon.id}
            </Typography>
            <Typography component="div" variant="h6">
              {pokemon.name}
            </Typography>
          </CardContent>

          <CardMedia
            image={pokemon.sprites.front_default}
            style={{
              margin: "auto",
              height: "130px",
              width: "130px",
            }}
            alt={pokemon.name}
          ></CardMedia>
        </Card>
      </Link>
    </Grid>
  );
}

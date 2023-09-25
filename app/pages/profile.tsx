import React from "react";
import Nav from "../components/Nav";
import Grid from "../components/Grid";
import requests from "../functions/requests";

function profile() {
  return (
    <div>
      <Nav />
      <Grid title="My list" fetchUrl={requests.fetchTopRatedMovie} />
    </div>
  );
}

export default profile;

import React from "react";
import Row from "../components/Row";
import requests from "../functions/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function home() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Popular Movies"
        fetchUrl={requests.fetchPopularMovie}
        isLargeRow
      />
      <Row
        title="Top Movies"
        fetchUrl={requests.fetchTopRatedMovie}
        isLargeRow={false}
      />
      <Row
        title="Upcoming Movies"
        fetchUrl={requests.fetchUpcomingMovie}
        isLargeRow={false}
      />
      <Row
        title="Popular Series"
        fetchUrl={requests.fetchPopularSeries}
        isLargeRow={false}
      />
    </div>
  );
}

export default home;

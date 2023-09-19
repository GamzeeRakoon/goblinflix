import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
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

export default App;

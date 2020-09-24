import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import "./Styles.css";

function App() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredDetails(
      details.filter(
        (detail) =>
          detail.name.toLowerCase().includes(search.toLowerCase()) ||
          detail.address.toLowerCase().includes(search.toLowerCase()) ||
          detail.id.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, details]);

  if (loading) {
    return <p>Loading UserDetails...</p>;
  }

  return (
    <div className="App contr container">
      <div class="input-icons">
        <input
          type="text"
          placeholder="Search Users by ID, adress, name"
          onChange={(e) => setSearch(e.target.value)}
          className="boxWid"
        />
        {filteredDetails.map((detail, idx) => (
          <Card key={idx} user={detail} />
        ))}
      </div>

      {filteredDetails.length <= 0 ? (
        <h5 className="card p-2">results not found</h5>
      ) : null}
    </div>
  );
}

export default App;

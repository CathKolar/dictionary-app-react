import React, { useState } from "react";
import axios from "axios";
import "dotenv";
import Photos from "./Photos";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  // deal with Dictionary API response
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  // deal with Pexels API response
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  //  make API call onSubmit
  function search(e) {
    e.preventDefault();

    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // pexels API call
    const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  //track input change - set state
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word would you like to look up? </h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <p className="hint">i.e. pterodactyl, chives, quaint, smize...</p>
      </section>
      <Results results={results} />
      <Photos photos={photos} results={results} />
    </div>
  );
}
